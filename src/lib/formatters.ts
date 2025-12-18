// Helper for safe date formatting from Firestore Timestamp or other sources
export const formatDate = (timestamp: any): string => {
    if (!timestamp) return 'N/A';

    // Check if it's a Firestore Timestamp (has toDate method)
    if (typeof timestamp.toDate === 'function') {
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
    const d = new Date(timestamp);
    if (!isNaN(d.getTime())) {
        return d.toLocaleDateString('vi-VN');
    }

    return 'N/A';
};
