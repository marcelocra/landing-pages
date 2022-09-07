/** @jsx h */
import { h } from "preact";
import { StateUpdater, useState } from "preact/hooks";
import { tw } from "@twind";

interface DarkToggleProps {
  setDark: StateUpdater<boolean>;
}

export default function DarkToggle(props: DarkToggleProps) {
  return (
    <span>
      Marcelo Almeida
    </span>
    // // TODO(marcelocra): get this to work.
    // <span>
    //   Marcelo Almei<span
    //     onClick={() => {
    //       props.setDark((state) => !state);
    //     }}
    //     class={tw`underline`}
    //   >
    //     da<span class={tw`text-gray-700`}>rk</span>
    //   </span>
    // </span>
  );
}
