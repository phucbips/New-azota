// Helper for safe date formatting from Firestore Timestamp or other sources
export const formatDate = (timestamp: any): string => {
    if (timestamp === null || timestamp === undefined) return 'N/A';

    // Check if it's a Firestore Timestamp (has toDate method)
    if (typeof timestamp === 'object' && typeof timestamp.toDate === 'function') {
        try {
            return timestamp.toDate().toLocaleDateString('vi-VN');
        } catch (e) {
            return 'Lỗi ngày';
        }
    }

    // Check if it's already a JS Date
    if (timestamp instanceof Date) {
        return timestamp.toLocaleDateString('vi-VN');
    }

    // Check if it's a number (milliseconds) or string date
    if (typeof timestamp === 'number' || typeof timestamp === 'string') {
        const d = new Date(timestamp);
        if (!isNaN(d.getTime())) {
            return d.toLocaleDateString('vi-VN');
        }
    }

    return 'N/A';
};

// Helper to safely render strings
export const safeString = (value: any, fallback = ''): string => {
    if (value === null || value === undefined) return fallback;
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return fallback; // Return fallback for objects/arrays to avoid React crash
};
