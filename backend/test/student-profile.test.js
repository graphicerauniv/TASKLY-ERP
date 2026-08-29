import assert from 'node:assert/strict';
import test from 'node:test';
import { ObjectId } from 'bson';
import { studentProfile } from '../src/services/student-profile.js';

test('normalizes approved admission responses into a student-owned profile', async () => {
  const admission = {
    _id: new ObjectId(),
    studentId: '23011672',
    studentName: 'Vivek Sharma',
    status: 'approved',
    isActive: true,
    collegeName: 'GEHU Dehradun Campus',
    courseName: 'Bachelor of Technology',
    departmentName: 'Computer Science and Engineering',
    academicSession: '2026-27',
    currentAcademicYear: 4,
    currentSemester: 7,
    formSnapshot: {
      sections: [{
        name: 'Student details',
        subsections: [
          {
            id: 'personal',
            name: 'Personal',
            fields: [
              { id: 'dob', name: 'Date of Birth', type: 'date' },
              { id: 'father', name: "Father's Name", type: 'text' },
              { id: 'email', name: 'Personal Email', type: 'email' },
              { id: 'section', name: 'Section', type: 'text' },
            ],
          },
          {
            id: 'education',
            name: 'Education qualifications',
            fields: [
              { id: 'qualification', name: 'Qualification', type: 'text' },
              { id: 'board', name: 'Board', type: 'text' },
            ],
          },
        ],
      }],
    },
    responses: {
      dob: '2004-04-22',
      father: 'Dinesh Chander Semwal',
      email: 'vivek@example.com',
      section: 'C1',
    },
    repeatableResponses: {
      education: [{ qualification: 'Class XII', board: 'CBSE' }],
    },
  };
  const database = {
    collection() {
      return {
        find() {
          return { project() { return { async toArray() { return []; } }; } };
        },
      };
    },
  };

  const profile = await studentProfile(database, admission);
  assert.equal(profile.identity.studentId, '23011672');
  assert.equal(profile.personal.dateOfBirth, '2004-04-22');
  assert.equal(profile.personal.fatherName, 'Dinesh Chander Semwal');
  assert.equal(profile.academic.section, 'C1');
  assert.equal(profile.contact.personalEmail, 'vivek@example.com');
  assert.equal(profile.educationRecords[0].title, 'Class XII');
  assert.equal(profile.educationRecords[0].fields[1].value, 'CBSE');
});
