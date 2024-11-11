import { StrictDict } from 'utils';

const EMAIL_HEADING = 'Email';
const TOTAL_COURSE_GRADE_HEADING = 'Total Grade (%)';
const USERNAME_HEADING = 'Username';
const FULL_NAME_HEADING = 'Full Name';
const TEST_FIELD_HEADING = 'Test Field'; // Define the new field heading

const GradeFormats = StrictDict({
  absolute: 'absolute',
  percent: 'percent',
});

const Headings = StrictDict({
  email: EMAIL_HEADING,
  totalGrade: TOTAL_COURSE_GRADE_HEADING,
  username: USERNAME_HEADING,
  fullName: FULL_NAME_HEADING,
  testField: TEST_FIELD_HEADING,  // Add the test field to the Headings dictionary
});

export {
  EMAIL_HEADING,
  TOTAL_COURSE_GRADE_HEADING,
  USERNAME_HEADING,
  FULL_NAME_HEADING,
  GradeFormats,
  Headings,
};
