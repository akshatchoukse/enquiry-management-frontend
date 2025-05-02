import React, { useEffect, useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";

function AllStudent() {
  const [studentObj, setStudentObj] = useState({
    college_name: '',
    student_name: '',
    student_contactno: '',
    student_year: ''
  });
  const [allStudent, setAllStudent] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const postData = () => {
    axios.post("https://enquiry-software.onrender.com/detail/student", studentObj)
      .then((res) => {
        alert(res.data);
        getData();
        resetForm();
      })
      .catch((err) => alert(err));
  };

  const getData = () => {
    axios.get("https://enquiry-software.onrender.com/detail/student")
      .then((res) => {
        console.log("Fetched data:", res.data);  // Debug
        setAllStudent(res.data);
      })
      .catch((err) => alert(err));
  };
  
  const deleteData = (id) => {
    axios.delete(`https://enquiry-software.onrender.com/detail/student/${id}`)
      .then((res) => {
        alert(res.data);
        getData();
      })
      .catch((err) => alert(err));
  };

  const updateData = () => {
    if (!editingId) return;
    axios.put(`https://enquiry-software.onrender.com/detail/student/${editingId}`, studentObj)
      .then((res) => {
        alert(res.data);
        getData();
        resetForm();
      })
      .catch((err) => alert(err));
  };

  const resetForm = () => {
    setStudentObj({
      college_name: '',
      student_name: '',
      student_contactno: '',
      student_email: ''
    });
    setEditingId(null);
  };

  const handleEdit = (student) => {
    setStudentObj(student);
    setEditingId(student._id);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* Form Section */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Student Information Form</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            value={studentObj.college_name}
            onChange={(e) => setStudentObj({ ...studentObj, college_name: e.target.value })}
            placeholder="Enter College Name"
            className="border border-gray-300 rounded p-3 w-full"
          />
          <input
            value={studentObj.student_name}
            onChange={(e) => setStudentObj({ ...studentObj, student_name: e.target.value })}
            placeholder="Enter Student Name"
            className="border border-gray-300 rounded p-3 w-full"
          />
          <input
            value={studentObj.student_contactno}
            onChange={(e) => setStudentObj({ ...studentObj, student_contactno: e.target.value })}
            placeholder="Enter Contact Number"
            className="border border-gray-300 rounded p-3 w-full"
          />
          <input
            value={studentObj.student_email}
            onChange={(e) => setStudentObj({ ...studentObj, student_year: e.target.value })}
            placeholder="Enter Student Year"
            className="border border-gray-300 rounded p-3 w-full"
          />
        </div>
        <div className="mt-4 text-center">
          {editingId ? (
            <button
              onClick={updateData}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-full transition"
            >
              Update
            </button>
          ) : (
            <button
              onClick={postData}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto mt-10 max-w-6xl mx-auto p-4">
        <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-4 py-3 text-sm text-left">S.No</th>
              <th className="px-4 py-3 text-sm text-left">College Name</th>
              <th className="px-4 py-3 text-sm text-left">Student Name</th>
              <th className="px-4 py-3 text-sm text-left">Contact No</th>
              <th className="px-4 py-3 text-sm text-left">Year</th>
              <th className="px-4 py-3 text-sm text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allStudent.map((student, index) => (
              <tr key={student._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">{index + 1}</td>
                <td className="px-4 py-3 text-sm">{student.college_name}</td>
                <td className="px-4 py-3 text-sm">{student.student_name}</td>
                <td className="px-4 py-3 text-sm">{student.student_contactno}</td>
                <td className="px-4 py-3 text-sm">{student.student_year}</td>
                <td className="px-4 py-3 text-sm space-x-2">
                  <button
                    onClick={() => handleEdit(student)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteData(student._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default AllStudent;
