import { RefObject, useEffect } from 'react';

class Decorator {
  private static instance?: Decorator;
  private elements: Set<HTMLElement> = new Set();

  public static add = (element: HTMLElement) => {
    Decorator.getInstance().add(element);
  };

  public static delete = (element: HTMLElement) => {
    Decorator.getInstance().delete(element);
  };

  private static getInstance = () => {
    if (!Decorator.instance) {
      Decorator.instance = new Decorator();
    }
    return Decorator.instance;
  };

  constructor() {
    window.addEventListener('resize', this.update);
  }

  public add = (element: HTMLElement) => {
    this.elements.add(element);
    this.update();
  };

  public delete = (element: HTMLElement) => {
    this.elements.delete(element);
    element.style.minHeight = '';
  };

  private update = () => {
    const height = Math.round(window.visualViewport?.height || window.innerHeight);
    this.elements.forEach(element => (element.style.minHeight = `${height}px`));
  };
}

interface UseAllocWindowHeightArgs {
  ref: RefObject<HTMLElement>;
}

export function useAllocWindowHeight({ ref }: UseAllocWindowHeightArgs) {
  useEffect(() => {
    if (!ref.current) {
      return () => {};
    }

    Decorator.add(ref.current);

    return () => {
      Decorator.delete(ref.current);
    };
  }, []);
}
