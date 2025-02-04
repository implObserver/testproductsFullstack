interface StateHandler<T> {
    toggle: () => void;
    getState: () => T;
    setState: (state: T) => void;
}