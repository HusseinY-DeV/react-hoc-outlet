

import { useState } from 'react'
import { isRequired } from '../utils/isRequired';

export function useBoolean({ value = false, stateName = isRequired("stateName") }) {

    const [state, setState] = useState(value);

    const on = () => {
        setState(true);
    }

    const off = () => {
        setState(false);
    }

    const toggle = () => {
        setState(prevState => !prevState);
    };

    return {
        [stateName]: state,
        ["on" + stateName]: on,
        ["off" + stateName]: off,
        ["toggle" + stateName]: toggle
    }
}
