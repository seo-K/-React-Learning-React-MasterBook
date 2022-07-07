import React, { useCallback, useContext, useEffect, NavigationContext } from "react";

export function useBlocker(blocker, when = true) {
  const { navigator } = useContext(NavigationContext);

  useEffect(() => {
    if (!when) return;

    const unblock = navigator.block((tx) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };
      blocker(autoUnblockingTx);
    });
    return unblock;
  }, [navigator, blocker, when]);
}

export function usePrompt(message, when = true) {
  const blocker = useCallback(
    (tx) => {
      //   eslint-disable-next-line no-alert
      if (window.confirm(message)) tx.retry();
    },
    [message]
  );

  useBlocker(blocker, when);
}

export function Block() {
  usePrompt("현재 페이지를 벗어나시겠습니까?", true);

  // return ( ... );
}
