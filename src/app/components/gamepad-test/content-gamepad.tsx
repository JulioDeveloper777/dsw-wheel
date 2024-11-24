"use client";

import Redirect from "@/app/lib/redirect";
import React, { useEffect, useRef, useState } from "react";

interface GamepadInfo {
  gamepad: Gamepad;
  axes: Array<{ axis: SVGCircleElement | null; value: SVGTextElement | null }>;
  buttons: Array<{
    circle: SVGCircleElement | null;
    value: SVGTextElement | null;
  }>;
  index: HTMLDivElement | null;
  id: HTMLDivElement | null;
  mapping: HTMLSpanElement | null;
  connected: HTMLSpanElement | null;
}

const FUDGE_FACTOR = 2;

export const ContentGamepadTest = () => {
  const gamepadsByIndex = useRef<Record<number, GamepadInfo>>({});
  const [frameCount, setFrameCount] = useState<number>(0);
  const requestRef = useRef<number>();
  const isComponentMounted = useRef(true);
  const [gamepads, setGamepads] = useState<Record<number, Gamepad>>({});
  const [axesValues, setAxesValues] = useState<Record<number, number[]>>({});
  const [buttonStates, setButtonStates] = useState<
    Record<number, Array<{ pressed: boolean; value: number; touched: boolean }>>
  >({});

  const addGamepad = (gamepad: Gamepad) => {
    console.log("add:", gamepad.index);

    const axes = [];
    for (let ndx = 0; ndx < gamepad.axes.length; ndx += 2) {
      axes.push({
        axis: null,
        value: null,
      });
    }
    const buttons = [];
    for (let ndx = 0; ndx < gamepad.buttons.length; ++ndx) {
      buttons.push({
        circle: null,
        value: null,
      });
    }

    gamepadsByIndex.current[gamepad.index] = {
      gamepad,
      axes,
      buttons,
      index: null,
      id: null,
      mapping: null,
      connected: null,
    };
    const currentGamepad = navigator.getGamepads()[gamepad.index];
    if (!currentGamepad) return;

    setGamepads((prev) => ({
      ...prev,
      [gamepad.index]: currentGamepad,
    }));
  };

  const removeGamepad = (gamepad: Gamepad) => {
    delete gamepadsByIndex.current[gamepad.index];
    setGamepads((prev) => {
      const newGamepads = { ...prev };
      delete newGamepads[gamepad.index];
      return newGamepads;
    });
    // Limpa os estados quando o gamepad é removido
    setAxesValues((prev) => {
      const newAxesValues = { ...prev };
      delete newAxesValues[gamepad.index];
      return newAxesValues;
    });
    setButtonStates((prev) => {
      const newButtonStates = { ...prev };
      delete newButtonStates[gamepad.index];
      return newButtonStates;
    });
  };

  const addGamepadIfNew = (gamepad: Gamepad) => {
    const info = gamepadsByIndex.current[gamepad.index];
    if (!info) {
      addGamepad(gamepad);
    } else {
      info.gamepad = gamepad;
    }
  };

  const handleConnect = (e: GamepadEvent) => {
    console.log("connect");
    if (e.gamepad) {
      addGamepadIfNew(e.gamepad);
    }
  };

  const handleDisconnect = (e: GamepadEvent) => {
    console.log("disconnect");
    if (e.gamepad) {
      removeGamepad(e.gamepad);
    }
  };

  const processController = (info: GamepadInfo) => {
    const { gamepad, axes, buttons } = info;

    const currentGamepad = navigator.getGamepads()[gamepad.index];
    if (!currentGamepad) return;

    // Atualiza os valores dos axes
    setAxesValues((prev) => ({
      ...prev,
      [gamepad.index]: [...currentGamepad.axes],
    }));

    // Atualiza os estados dos botões
    setButtonStates((prev) => ({
      ...prev,
      [gamepad.index]: currentGamepad.buttons.map((button) => ({
        pressed: button.pressed,
        value: button.value,
        touched: button.touched,
      })),
    }));

    axes.forEach(({ axis, value }, ndx) => {
      const off = ndx * 2;
      if (axis && value) {
        axis.setAttributeNS(
          null,
          "cx",
          (gamepad.axes[off] * FUDGE_FACTOR).toString()
        );
        axis.setAttributeNS(
          null,
          "cy",
          (gamepad.axes[off + 1] * FUDGE_FACTOR).toString()
        );
        value.textContent = `${gamepad.axes[off].toFixed(2)},${gamepad.axes[
          off + 1
        ].toFixed(2)}`;
      }
    });

    buttons.forEach(({ circle, value }, ndx) => {
      const button = gamepad.buttons[ndx];
      if (circle && value) {
        circle.setAttributeNS(
          null,
          "r",
          (button.value * FUDGE_FACTOR).toString()
        );
        circle.setAttributeNS(null, "fill", button.pressed ? "red" : "gray");
        value.textContent = button.value.toFixed(2);
      }
    });
  };

  const addNewPads = () => {
    const gamepads = navigator.getGamepads();
    for (let i = 0; i < gamepads.length; i++) {
      const gamepad = gamepads[i];
      if (gamepad) {
        addGamepadIfNew(gamepad);
      }
    }
  };

  const animate = () => {
    setFrameCount((prev) => (prev + 1) % 100);
    addNewPads();
    Object.values(gamepadsByIndex.current).forEach(processController);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    let isActive = true;
    let isNavigating = false;
    
    // Initial gamepad scan
    const initializeGamepads = () => {
      const gamepads = navigator.getGamepads();
      for (const gamepad of gamepads) {
        if (gamepad) {
          addGamepadIfNew(gamepad);
        }
      }
    };
    
    const animate = () => {
      if (!isActive || isNavigating) return;
      
      setFrameCount((prev) => (prev + 1) % 100);
      
      if (Object.keys(gamepadsByIndex.current).length > 0) {
        addNewPads();
        Object.values(gamepadsByIndex.current).forEach(processController);
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
  
    // Initialize immediately
    initializeGamepads();
    
    const handleBeforeNavigate = () => {
      isNavigating = true;
    };
  
    window.addEventListener('mousedown', handleBeforeNavigate);
    window.addEventListener("gamepadconnected", handleConnect);
    window.addEventListener("gamepaddisconnected", handleDisconnect);
    requestRef.current = requestAnimationFrame(animate);
  
    return () => {
      isActive = false;
      isNavigating = true;
      window.removeEventListener('mousedown', handleBeforeNavigate);
      window.removeEventListener("gamepadconnected", handleConnect);
      window.removeEventListener("gamepaddisconnected", handleDisconnect);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="p-4 relative pointer-events-auto z-auto">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">DSW Gamepad Test</h1>
        <span className="text-red-400 text-sm sm:text-base">BETA</span>
        <span className="ml-auto text-sm sm:text-base">
          Frame: {frameCount.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {Object.entries(gamepads).map(([index, gamepad]) => (
          <div
            key={index}
            className="bg-zinc-800 p-4 rounded-lg flex flex-col gap-4"
          >
            <div className="flex flex-wrap text-xs sm:text-sm gap-2 mb-2">
              <div
                ref={(el) => {
                  if (el && gamepadsByIndex.current[Number(index)]) {
                    gamepadsByIndex.current[Number(index)].index = el;
                  }
                }}
              >
                #{gamepad.index}
              </div>
              <div
                ref={(el) => {
                  if (el && gamepadsByIndex.current[Number(index)]) {
                    gamepadsByIndex.current[Number(index)].id = el;
                  }
                }}
              >
                {gamepad.id}
              </div>
              <div className="ml-auto">
                <span
                  ref={(el) => {
                    if (el && gamepadsByIndex.current[Number(index)]) {
                      gamepadsByIndex.current[Number(index)].mapping = el;
                    }
                  }}
                >
                  {gamepad.mapping}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold mb-2">Axes</h3>
                <div className="grid grid-cols-2 gap-2">
                  {Array.from({ length: gamepad.axes.length / 2 }).map(
                    (_, i) => (
                      <div
                        key={`axis-${i}-${frameCount}`}
                        className="flex flex-col items-center"
                      >
                        <svg
                          viewBox="-2.2 -2.2 4.4 4.4"
                          className="w-20 h-20 sm:w-24 sm:h-24"
                        >
                          <circle
                            cx="0"
                            cy="0"
                            r="2"
                            fill="none"
                            stroke="#888"
                            strokeWidth="0.04"
                          />
                          <path
                            d="M0,-2L0,2M-2,0L2,0"
                            stroke="#888"
                            strokeWidth="0.04"
                          />
                          <circle
                            ref={(el) => {
                              if (
                                el &&
                                gamepadsByIndex.current[Number(index)]
                              ) {
                                gamepadsByIndex.current[Number(index)].axes[i] =
                                  gamepadsByIndex.current[Number(index)].axes[
                                    i
                                  ] || {};
                                gamepadsByIndex.current[Number(index)].axes[
                                  i
                                ].axis = el;
                              }
                            }}
                            cx="0"
                            cy="0"
                            r="0.22"
                            fill="red"
                          />
                          <text
                            ref={(el) => {
                              if (
                                el &&
                                gamepadsByIndex.current[Number(index)]
                              ) {
                                gamepadsByIndex.current[Number(index)].axes[i] =
                                  gamepadsByIndex.current[Number(index)].axes[
                                    i
                                  ] || {};
                                gamepadsByIndex.current[Number(index)].axes[
                                  i
                                ].value = el;
                              }
                            }}
                            textAnchor="middle"
                            fill="none"
                            x="0"
                            y="2"
                          >
                            0
                          </text>
                        </svg>
                        <div className="text-xs mt-1">
                          {axesValues[Number(index)] && (
                            <>
                              <div>
                                X:{" "}
                                {Math.round(
                                  (axesValues[Number(index)][i * 2] + 1) * 50
                                )}
                                %
                              </div>
                              <div>
                                Y:{" "}
                                {Math.round(
                                  (axesValues[Number(index)][i * 2 + 1] + 1) *
                                    50
                                )}
                                %
                              </div>
                              <div>
                                Raw: [
                                {axesValues[Number(index)][i * 2]?.toFixed(3) ||
                                  "0.000"}
                                ,{" "}
                                {axesValues[Number(index)][i * 2 + 1]?.toFixed(
                                  3
                                ) || "0.000"}
                                ]
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2">Buttons</h3>
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: gamepad.buttons.length }).map(
                    (_, i) => (
                      <div
                        key={`button-${i}-${frameCount}`}
                        className="flex flex-col items-center"
                      >
                        <svg viewBox="-2.2 -2.2 4.4 4.4" className="w-12 h-12">
                          <circle
                            cx="0"
                            cy="0"
                            r="2"
                            fill="none"
                            stroke="#888"
                            strokeWidth="0.1"
                          />
                          <circle
                            ref={(el) => {
                              if (
                                el &&
                                gamepadsByIndex.current[Number(index)]
                              ) {
                                gamepadsByIndex.current[Number(index)].buttons[
                                  i
                                ] =
                                  gamepadsByIndex.current[Number(index)]
                                    .buttons[i] || {};
                                gamepadsByIndex.current[Number(index)].buttons[
                                  i
                                ].circle = el;
                              }
                            }}
                            cx="0"
                            cy="0"
                            r="0"
                            fill="none"
                          />
                          <text
                            ref={(el) => {
                              if (
                                el &&
                                gamepadsByIndex.current[Number(index)]
                              ) {
                                gamepadsByIndex.current[Number(index)].buttons[
                                  i
                                ] =
                                  gamepadsByIndex.current[Number(index)]
                                    .buttons[i] || {};
                                gamepadsByIndex.current[Number(index)].buttons[
                                  i
                                ].value = el;
                              }
                            }}
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill="none"
                            x="0"
                            y="0"
                          >
                            0
                          </text>
                        </svg>
                        <div className="text-xs mt-1">
                          <div>Button {i}</div>
                          {buttonStates[Number(index)] && (
                            <>
                              <div
                                className={
                                  buttonStates[Number(index)][i]?.pressed
                                    ? "text-white"
                                    : ""
                                }
                              >
                                Pressed:{" "}
                                {buttonStates[Number(index)][i]?.pressed
                                  ? "Yes"
                                  : "No"}
                              </div>
                              <div>
                                Value:{" "}
                                {(
                                  buttonStates[Number(index)][i]?.value * 100
                                ).toFixed(0)}
                                %
                              </div>
                              <div
                                className={
                                  buttonStates[Number(index)][i]?.touched
                                    ? "text-white"
                                    : ""
                                }
                              >
                                Touched:{" "}
                                {buttonStates[Number(index)][i]?.touched
                                  ? "Yes"
                                  : "No"}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
