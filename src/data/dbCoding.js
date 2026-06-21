const dbCoding = [
    // your existing coding questions...

    {
        title: "Find All Records",
        question: "Write an SQL query to fetch all records from the Student table.",
        code: `SELECT * FROM Student;`,
        explanation: "This query selects all rows and columns from the Student table."
    },
    {
        title: "Count Rows",
        question: "Write an SQL query to count total number of employees.",
        code: `SELECT COUNT(*) FROM Employee;`,
        explanation: "COUNT(*) returns total number of rows in the table."
    },
    {
        title: "Filter Data",
        question: "Write an SQL query to find students older than 18.",
        code: `SELECT * FROM Student WHERE age > 18;`,
        explanation: "WHERE clause filters records based on condition."
    },

    {
        title: "Group By Job Role",
        question: "Write a query to display each job role group in emp table.",
        code: `SELECT job
FROM emp
GROUP BY job;`,
        explanation: "GROUP BY is used to group records based on job column."
    },

    {
        title: "Count Employees per Job",
        question: "Display job role and number of employees in each job role.",
        code: `SELECT job, COUNT(job)
FROM emp
GROUP BY job;`,
        explanation: "COUNT() is used to count employees per job role."
    },

    {
        title: "Jobs with Minimum 2 Employees",
        question: "Display job roles having at least 2 employees.",
        code: `SELECT job, COUNT(job)
FROM emp
GROUP BY job
HAVING COUNT(job) >= 2;`,
        explanation: "HAVING filters grouped results."
    },

    {
        title: "Department Salary Sum",
        question: "Display department number and total salary.",
        code: `SELECT deptno, SUM(sal)
FROM emp
GROUP BY deptno;`,
        explanation: "SUM() calculates total salary per department."
    },

    {
        title: "Second Highest Salary",
        question: "Find second highest salary in emp table.",
        code: `SELECT MAX(sal)
FROM emp
WHERE sal < (SELECT MAX(sal) FROM emp);`,
        explanation: "Subquery removes highest salary first."
    },

    {
        title: "Even Salary Employees",
        question: "Display employees with even salary.",
        code: `SELECT *
FROM emp
WHERE MOD(sal, 2) = 0;`,
        explanation: "MOD checks even numbers."
    },

    {
        title: "Employees Name Filter",
        question: "Display employees whose name starts with S or ends with A.",
        code: `SELECT job, COUNT(job)
FROM emp
WHERE ename LIKE 'S%' OR ename LIKE '%A'
GROUP BY job;`,
        explanation: "LIKE is used for pattern matching."
    },

    {
        title: "Department Join Query",
        question: "Display department name and employee count.",
        code: `SELECT d.dname, COUNT(e.ename)
FROM dept d
JOIN emp e ON d.deptno = e.deptno
GROUP BY d.dname;`,
        explanation: "JOIN combines dept and emp tables."
    },

    {
        title: "Smith Manager Query",
        question: "Find manager of SMITH.",
        code: `SELECT *
FROM emp
WHERE empno = (SELECT mgr FROM emp WHERE ename = 'SMITH');`,
        explanation: "Self subquery used to find manager."
    },

    {
        title: "3rd Highest Salary",
        question: "Find 3rd highest salary.",
        code: `SELECT MIN(sal)
FROM (
  SELECT DISTINCT sal
  FROM emp
  ORDER BY sal DESC
)
WHERE ROWNUM <= 3;`,
        explanation: "Top salaries are filtered using ROWNUM."
    },

    {
        title: "Alternate Rows",
        question: "Display odd/even rows from emp table.",
        code: `SELECT *
FROM (
  SELECT emp.*, ROWNUM rn
  FROM emp
)
WHERE MOD(rn, 2) = 0;`,
        explanation: "ROWNUM helps in row-based filtering."
    },

    {
        title: "Substring Name Operations",
        question: "Show first and last character of employee names.",
        code: `SELECT ename,
SUBSTR(ename, 1, 1) AS first_char,
SUBSTR(ename, -1) AS last_char
FROM emp;`,
        explanation: "SUBSTR extracts characters from string."
    }
];
export default dbCoding;