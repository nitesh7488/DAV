"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Book, UserCheck, Calendar, AlertCircle, CheckCircle } from "lucide-react";

export default function LibrarianLibrary() {
  const [books, setBooks] = useState<any[]>([]);
  const [issues, setIssues] = useState<any[]>([]);
  const [bookForm, setBookForm] = useState({ title: '', author: '', isbn: '', totalCopies: 1 });
  const [issueForm, setIssueForm] = useState({ bookId: '', studentId: '' });

  useEffect(() => {
    fetchBooks();
    fetchIssues();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/library/books");
      const data = await res.json();
      setBooks(data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchIssues = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/library/issues");
      const data = await res.json();
      setIssues(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/api/library/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookForm)
      });
      fetchBooks();
      setBookForm({ title: '', author: '', isbn: '', totalCopies: 1 });
    } catch (e) {
      console.error(e);
    }
  };

  const handleIssueBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/api/library/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(issueForm)
      });
      fetchBooks();
      fetchIssues();
      setIssueForm({ bookId: '', studentId: '' });
    } catch (e) {
      console.error(e);
    }
  };

  const handleReturnBook = async (issueId: string) => {
    try {
      await fetch("http://localhost:5000/api/library/issues/return", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ issueId })
      });
      fetchBooks();
      fetchIssues();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Library Management Hub</h1>
        <div className="text-sm text-slate-500">Librarian Privileges Active</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Book Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
            <Book className="w-5 h-5 mr-2 text-cyan-500" />
            Add New Book
          </h2>
          <form onSubmit={handleAddBook} className="space-y-4">
            <input type="text" placeholder="Title" required className="w-full border rounded-lg p-2 focus:ring-cyan-500 focus:border-cyan-500" value={bookForm.title} onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })} />
            <input type="text" placeholder="Author" required className="w-full border rounded-lg p-2 focus:ring-cyan-500 focus:border-cyan-500" value={bookForm.author} onChange={(e) => setBookForm({ ...bookForm, author: e.target.value })} />
            <input type="text" placeholder="ISBN" required className="w-full border rounded-lg p-2 focus:ring-cyan-500 focus:border-cyan-500" value={bookForm.isbn} onChange={(e) => setBookForm({ ...bookForm, isbn: e.target.value })} />
            <input type="number" placeholder="Total Copies" required min="1" className="w-full border rounded-lg p-2 focus:ring-cyan-500 focus:border-cyan-500" value={bookForm.totalCopies} onChange={(e) => setBookForm({ ...bookForm, totalCopies: parseInt(e.target.value) })} />
            <button type="submit" className="w-full bg-cyan-600 text-white rounded-lg p-2 font-semibold hover:bg-cyan-700 shadow-lg shadow-cyan-600/30">Add Book</button>
          </form>
        </motion.div>

        {/* Issue Book Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
            <UserCheck className="w-5 h-5 mr-2 text-emerald-500" />
            Issue Book to Student
          </h2>
          <form onSubmit={handleIssueBook} className="space-y-4">
            <select required className="w-full border rounded-lg p-2 focus:ring-emerald-500 focus:border-emerald-500" value={issueForm.bookId} onChange={(e) => setIssueForm({ ...issueForm, bookId: e.target.value })}>
              <option value="">Select a Book</option>
              {books.map((b: any) => (
                <option key={b.id} value={b.id} disabled={b.available <= 0}>
                  {b.title} (Available: {b.available}/{b.totalCopies})
                </option>
              ))}
            </select>
            <input type="text" placeholder="Student ID" required className="w-full border rounded-lg p-2 focus:ring-emerald-500 focus:border-emerald-500" value={issueForm.studentId} onChange={(e) => setIssueForm({ ...issueForm, studentId: e.target.value })} />
            <p className="text-xs text-slate-500">Policy: Books are issued for a maximum of 7 days.</p>
            <button type="submit" className="w-full bg-emerald-600 text-white rounded-lg p-2 font-semibold hover:bg-emerald-700 shadow-lg shadow-emerald-600/30">Issue Book</button>
          </form>
        </motion.div>
      </div>

      {/* Issued Books Log */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-blue-500" />
          Global Issued Books Log
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-4 py-3 font-medium">Book</th>
                <th className="px-4 py-3 font-medium">Student Info</th>
                <th className="px-4 py-3 font-medium">Issue Date</th>
                <th className="px-4 py-3 font-medium">Due Date</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {issues.map((issue: any) => {
                const isOverdue = new Date(issue.dueDate) < new Date() && issue.status === 'ISSUED';
                return (
                  <tr key={issue.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">{issue.book?.title}</td>
                    <td className="px-4 py-3">
                      <div className="text-slate-900 font-medium">ID: {issue.studentId}</div>
                      {issue.student?.firstName && <div className="text-slate-500 text-xs">{issue.student.firstName} {issue.student.lastName}</div>}
                    </td>
                    <td className="px-4 py-3 text-slate-500">{new Date(issue.issueDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3 text-slate-500">
                      <span className={isOverdue ? "text-red-600 font-bold" : ""}>
                        {new Date(issue.dueDate).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {issue.status === 'ISSUED' ? (
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-bold flex items-center w-fit">
                          <AlertCircle className="w-3 h-3 mr-1" /> Issued
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-bold flex items-center w-fit">
                          <CheckCircle className="w-3 h-3 mr-1" /> Returned
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {issue.status === 'ISSUED' && (
                        <button onClick={() => handleReturnBook(issue.id)} className="bg-slate-900 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-slate-800 transition">
                          Mark Returned
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
              {issues.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-slate-500">No books issued yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
