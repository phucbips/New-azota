import React, { useState, useEffect, useRef } from 'react';
import { Check, ChevronsUpDown, Plus } from 'lucide-react';
import { collection, query, orderBy, onSnapshot, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { cn } from '../../lib/utils';
import { useAuth } from '../../hooks/useAuth';

interface Subject {
  id: string;
  name: string;
}

interface SubjectSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({ value, onChange, error }) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [queryText, setQueryText] = useState('');
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial Seed Data
  const SEED_SUBJECTS = [
    "Toán Học", "Ngữ Văn", "Tiếng Anh", "Vật Lý",
    "Hóa Học", "Sinh Học", "Lịch Sử", "Địa Lý", "Giáo Dục Công Dân"
  ];

  useEffect(() => {
    const q = query(collection(db, 'subjects'), orderBy('name'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedSubjects = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name
      }));

      // If empty, we could seed, but for now just rely on "Add New" or initial list if we want to force seed.
      // But typically we just show the fetched list.
      // If fetches are empty, we can show seed suggestions in the filtered list.
      setSubjects(fetchedSubjects);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Filter subjects based on query
  // Combine fetched subjects with seed subjects if fetched is empty?
  // No, let's stick to Firestore + "Add New".
  // Actually, prompt says: "Initial Seed Data (if empty): ...".
  // So if `subjects.length === 0` && `!loading`, we might want to suggest seeds.

  const filteredSubjects = queryText === ''
    ? subjects
    : subjects.filter((subject) =>
        subject.name.toLowerCase().includes(queryText.toLowerCase())
      );

  // If DB is empty, use SEED_SUBJECTS for display logic (but ideally we create them on selection)
  const displaySubjects = (subjects.length === 0 && !loading)
    ? SEED_SUBJECTS.map(s => ({ id: s, name: s }))
    : filteredSubjects;

  // Handle "Add New"
  const handleCreateSubject = async () => {
    if (!queryText.trim()) return;

    try {
        const docRef = await addDoc(collection(db, 'subjects'), {
            name: queryText.trim(),
            createdBy: user?.uid || 'system',
            createdAt: Timestamp.now()
        });
        // Select it immediately
        onChange(queryText.trim());
        setQueryText('');
        setOpen(false);
    } catch (err) {
        console.error("Failed to create subject", err);
    }
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <label className="text-sm font-bold text-slate-700 block mb-1.5">
        Subject <span className="text-red-500">*</span>
      </label>

      <div
        className={cn(
            "w-full h-11 px-3 rounded-lg border flex items-center justify-between cursor-pointer bg-white transition-all",
            error ? "border-red-500 ring-1 ring-red-500/20" : "border-slate-300 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500"
        )}
        onClick={() => setOpen(!open)}
      >
        <span className={cn("text-sm", !value && "text-slate-400")}>
            {value || "Select a subject..."}
        </span>
        <ChevronsUpDown className="w-4 h-4 text-slate-400 opacity-50" />
      </div>

      {open && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg border border-slate-200 shadow-lg max-h-60 overflow-hidden flex flex-col">
            <input
                type="text"
                className="w-full p-3 border-b border-slate-100 text-sm focus:outline-none bg-slate-50"
                placeholder="Search or add new..."
                value={queryText}
                onChange={(e) => setQueryText(e.target.value)}
                autoFocus
            />

            <div className="overflow-y-auto flex-1 p-1">
                {displaySubjects.map((subject) => (
                    <div
                        key={subject.id}
                        onClick={() => {
                            onChange(subject.name);
                            setOpen(false);
                            setQueryText('');
                        }}
                        className={cn(
                            "flex items-center justify-between px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-blue-50 transition-colors",
                            value === subject.name && "bg-blue-50 text-blue-700 font-medium"
                        )}
                    >
                        {subject.name}
                        {value === subject.name && <Check className="w-4 h-4 text-blue-600" />}
                    </div>
                ))}

                {queryText && !displaySubjects.find(s => s.name.toLowerCase() === queryText.toLowerCase()) && (
                    <div
                        onClick={handleCreateSubject}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-blue-50 text-blue-600 font-medium border-t border-slate-100 mt-1"
                    >
                        <Plus className="w-4 h-4" />
                        Create "{queryText}"
                    </div>
                )}

                {displaySubjects.length === 0 && !queryText && (
                    <div className="px-3 py-4 text-center text-xs text-slate-400">
                        Type to search or create
                    </div>
                )}
            </div>
        </div>
      )}

      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};
