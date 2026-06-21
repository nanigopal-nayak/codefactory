const dbMCQ = [
    // your existing questions...

    {
        question: "Which SQL command is used to remove a table completely?",
        options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
        answer: "DROP",
    },
    {
        question: "Which normal form removes transitive dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: "3NF",
    },
    {
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        answer: "MongoDB",
    },
    {
        question: "Which SQL command is used to remove a table completely?",
        options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
        answer: "DROP",
    },
    {
        question: "Which normal form removes transitive dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: "3NF",
    },
    {
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        answer: "MongoDB",
    },

    {
        question: "What does DBMS stand for?",
        options: [
            "Database Management System",
            "Data Backup Management System",
            "Database Main System",
            "Data Business Management System"
        ],
        answer: "Database Management System",
    },

    {
        question: "Which key uniquely identifies a record?",
        options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"],
        answer: "Primary Key",
    },

    {
        question: "Which SQL command is used to fetch data?",
        options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
        answer: "SELECT",
    },

    {
        question: "Which command is used to add new data?",
        options: ["INSERT", "SELECT", "CREATE", "DROP"],
        answer: "INSERT",
    },

    {
        question: "Which command is used to update data?",
        options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"],
        answer: "UPDATE",
    },

    {
        question: "Which clause is used to filter records?",
        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
        answer: "WHERE",
    },

    {
        question: "Which clause is used for grouping data?",
        options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
        answer: "GROUP BY",
    },

    {
        question: "Which join returns only matching records?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
        answer: "INNER JOIN",
    },

    {
        question: "Which join returns all records from left table?",
        options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "CROSS JOIN"],
        answer: "LEFT JOIN",
    },

    {
        question: "Which operator is used for pattern matching?",
        options: ["LIKE", "IN", "BETWEEN", "EXISTS"],
        answer: "LIKE",
    },

    {
        question: "Which symbol is used in LIKE for multiple characters?",
        options: ["%", "_", "#", "*"],
        answer: "%",
    },

    {
        question: "Which SQL command removes all rows but keeps structure?",
        options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
        answer: "TRUNCATE",
    },

    {
        question: "Which normal form removes partial dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: "2NF",
    },

    {
        question: "What is a foreign key?",
        options: [
            "A key that uniquely identifies a record",
            "A key that links two tables",
            "A key that allows duplicates",
            "A key used for indexing"
        ],
        answer: "A key that links two tables",
    },

    {
        question: "What is SQL?",
        options: [
            "Structured Query Language",
            "Simple Query Language",
            "System Query Language",
            "Sequential Query Language"
        ],
        answer: "Structured Query Language",
    },

    {
        question: "Which command is used to delete specific rows?",
        options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
        answer: "DELETE",
    },

    {
        question: "Which constraint ensures uniqueness?",
        options: ["NOT NULL", "DEFAULT", "UNIQUE", "CHECK"],
        answer: "UNIQUE",
    },

    {
        question: "Which constraint prevents NULL values?",
        options: ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"],
        answer: "NOT NULL",
    },

    {
        question: "Which command is used to create a table?",
        options: ["CREATE", "INSERT", "SELECT", "ALTER"],
        answer: "CREATE",
    },

    {
        question: "Which command is used to remove a column?",
        options: ["DROP COLUMN", "DELETE COLUMN", "REMOVE COLUMN", "ALTER COLUMN"],
        answer: "DROP COLUMN",
    },

    {
        question: "Which index is faster?",
        options: ["Clustered Index", "Non-Clustered Index", "Both same", "None"],
        answer: "Clustered Index",
    },

    {
        question: "What is a view?",
        options: [
            "Physical table",
            "Virtual table",
            "Backup table",
            "Temporary file"
        ],
        answer: "Virtual table",
    },

    {
        question: "Which join is also called Cartesian product?",
        options: ["Cross Join", "Inner Join", "Left Join", "Right Join"],
        answer: "Cross Join",
    },

    {
        question: "Which operator combines rows from two queries?",
        options: ["UNION", "JOIN", "WHERE", "GROUP BY"],
        answer: "UNION",
    },

    {
        question: "Which command is used to save transaction?",
        options: ["SAVE", "COMMIT", "ROLLBACK", "SAVEPOINT"],
        answer: "COMMIT",
    },

    {
        question: "Which command undo transaction?",
        options: ["COMMIT", "ROLLBACK", "SAVE", "DELETE"],
        answer: "ROLLBACK",
    },

    {
        question: "Which is NOT a DBMS type?",
        options: ["RDBMS", "HDBMS", "NDBMS", "HTTPMS"],
        answer: "HTTPMS",
    },

    {
        question: "Which normal form removes redundancy?",
        options: ["Normalization", "Denormalization", "Indexing", "Partitioning"],
        answer: "Normalization",
    },

    {
        question: "Which clause is used with HAVING?",
        options: ["GROUP BY", "WHERE", "ORDER BY", "SELECT"],
        answer: "GROUP BY",
    },

    {
        question: "Which keyword removes duplicates?",
        options: ["DISTINCT", "UNIQUE", "REMOVE", "DELETE"],
        answer: "DISTINCT",
    },

    {
        question: "Which operator checks range?",
        options: ["BETWEEN", "IN", "LIKE", "EXISTS"],
        answer: "BETWEEN",
    },

    {
        question: "Which is NoSQL database?",
        options: ["Oracle", "MySQL", "MongoDB", "SQL Server"],
        answer: "MongoDB",
    },

    {
        question: "Which key is combination of multiple columns?",
        options: ["Composite Key", "Primary Key", "Foreign Key", "Super Key"],
        answer: "Composite Key",
    },

    {
        question: "Which SQL statement creates database?",
        options: ["CREATE DATABASE", "MAKE DATABASE", "NEW DATABASE", "BUILD DATABASE"],
        answer: "CREATE DATABASE",
    },

    {
        question: "Which clause sorts data?",
        options: ["ORDER BY", "GROUP BY", "SORT", "ARRANGE"],
        answer: "ORDER BY",
    },

    {
        question: "Which is DDL command?",
        options: ["CREATE", "INSERT", "UPDATE", "SELECT"],
        answer: "CREATE",
    },

    {
        question: "Which is DML command?",
        options: ["INSERT", "CREATE", "DROP", "ALTER"],
        answer: "INSERT",
    },

    {
        question: "Which is TCL command?",
        options: ["COMMIT", "SELECT", "INSERT", "DELETE"],
        answer: "COMMIT",
    },

    {
        question: "Which function counts rows?",
        options: ["COUNT()", "SUM()", "AVG()", "MAX()"],
        answer: "COUNT()",
    },

    {
        question: "Which is used for aggregation?",
        options: ["SUM()", "LIKE", "IN", "BETWEEN"],
        answer: "SUM()",
    },

    {
        question: "Which key is NOT primary but unique?",
        options: ["Alternate Key", "Foreign Key", "Composite Key", "Super Key"],
        answer: "Alternate Key",
    },

    {
        question: "Which is used to define schema?",
        options: ["DDL", "DML", "TCL", "DCL"],
        answer: "DDL",
    },

    {
        question: "Which SQL feature improves performance?",
        options: ["Index", "Table", "View", "Trigger"],
        answer: "Index",
    }
];
export default dbMCQ;