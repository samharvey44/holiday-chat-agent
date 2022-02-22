import React, { useMemo } from 'react';

export default function useTimeOfDay() {
    return useMemo(() => {
        const date = new Date();
        const hours = date.getHours();

        if (hours < 12) return 'morning';

        if (hours < 18) return 'afternoon';

        return 'evening';
    }, []);
}
