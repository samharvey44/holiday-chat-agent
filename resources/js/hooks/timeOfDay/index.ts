import { useMemo } from 'react';

export default function useTimeOfDay() {
    const hours = new Date().getHours();

    return useMemo(() => {
        if (hours < 12) return 'morning';

        if (hours < 18) return 'afternoon';

        return 'evening';
    }, [hours]);
}
