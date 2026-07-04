import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./CvGenerator.css";

const CvGenerator = () => {
    const cvRef = useRef();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        name: "John Doe",
        phone: "1234567890",
        email: "johndoe@gmail.com",
        linkedin: "johndoe",
        github: "johndoe.com/john-doe",

        summary:
            "Full-Stack Java Developer with 1.2+ years of experience in developing scalable web applications using Java, Spring Boot, React.js, PostgreSQL, and RESTful APIs. Proficient in Java 8, SQL, JPA/Hibernate, Git, and modern software development practices. Experienced in building responsive user interfaces, secure backend services, and database-driven applications. Passionate about clean code, scalable architecture, and delivering user-focused solutions in Agile environments.",

        skills: `
                Programming Languages : Java (Core Java, OOPs, Advanced Java, Collections, Java 8)
                Web Technologies : HTML5, CSS3
                Frameworks & Libraries : Spring Boot, Hibernate, React.js, Bootstrap 5
                Database : SQL, JDBC, PostgreSQL
                Version Control : Git, GitHub
                DevOps & CI/CD : Jenkins, GitHub Actions
                `,

        project1: `
                Code Nexus – Java Full Stack Learning Platform
                  React.js | JavaScript | Bootstrap
                    • Built a responsive e-learning platform with technology modules, voice search, dark/light  mode, and certification using React.js.
                `,

        project2: `
                Smart Contact Manager
                  Spring Boot | Hibernate | PostgreSQL
                    • Developed a CRUD-based contact manager with user authentication, role-based access, and      persistent data storage using PostgreSQL.
                `,

        exp1: `
                Company name : 4SL Background Check Pvt. Ltd
                Job Title : Full-Stack Web Developer (C#, .NET)
                Duration : 6 months
                Worked on backend services and application development using .NET technologies.
                `,

        exp2: `
                Company name : Ninestar Information Technologies Pvt. Ltd
                Job Title : Trainee – Software Developer (Java, React.js, Spring Boot)
                Duration : 9 months (Present)
                Developed and maintained web applications using Java, Spring Boot, and React.js.
                `,

        certifications: `
                        Core JAVA certificate from LIT (Lakshya Institute of Technology)
                        NPTEL Online certification - IOT (Introduction to Internet of Things)
                        Full-Stack Java development course (JSpider Institute)
                        `,

        education: `
                    • MCA - Silicon Institute of Technology (CGPA: 7.85)
                    • BSc Chemistry - Remuna Degree College (CGPA: 7.1)
                    `,

        place: "Bengaluru",
        date: "04/07/2026",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    const generatePDF = () => {

        if (!validateForm()) return;

        html2canvas(cvRef.current, { scale: 2 }).then((canvas) => {
            const pdf = new jsPDF("p", "mm", "a4");
            const imgData = canvas.toDataURL("image/png");

            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save(`${form.name}_CV.pdf`);
        });
    };
    const validateForm = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "Full Name is required";
        if (!form.phone.trim()) newErrors.phone = "Phone Number is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        if (!form.linkedin.trim()) newErrors.linkedin = "LinkedIn ID is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            const firstError = Object.keys(newErrors)[0];
            const element = document.querySelector(`[name="${firstError}"]`);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });

                element.focus();
            }

            return false;
        }

        return true;
    };
    return (
        <div className="cv-wrapper">

            {/* ================= FORM ================= */}
            <div className="form-box">
                <button
                    className="back-btn"
                    onClick={() => navigate("/")}
                >
                    ← Back to Home
                </button>
                <h2>CV Builder</h2>

                <label>FULL NAME *</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}

                <label>PHONE NUMBER *</label>
                <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={errors.phone ? "input-error" : ""}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
                <label>EMAIL *</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}

                <label>LINKEDIN ID *</label>
                <input name="linkedin" value={form.linkedin} onChange={handleChange} />

                <label>GITHUB (OPTIONAL)</label>
                <input name="github" value={form.github} onChange={handleChange} />

                <label>PROFESSIONAL SUMMARY</label>
                <textarea name="summary" value={form.summary} onChange={handleChange} />

                <label>TECHNICAL SKILLS</label>
                <textarea name="skills" value={form.skills} onChange={handleChange} />

                <label>PROJECT 1</label>
                <textarea name="project1" value={form.project1} onChange={handleChange} />

                <label>PROJECT 2</label>
                <textarea name="project2" value={form.project2} onChange={handleChange} />

                <label>WORK EXPERIENCE 1</label>
                <textarea name="exp1" value={form.exp1} onChange={handleChange} />

                <label>WORK EXPERIENCE 2</label>
                <textarea name="exp2" value={form.exp2} onChange={handleChange} />

                <label>CERTIFICATIONS</label>
                <textarea name="certifications" value={form.certifications} onChange={handleChange} />

                <label>EDUCATION</label>
                <textarea name="education" value={form.education} onChange={handleChange} />

                <label>PLACE</label>
                <input name="place" value={form.place} onChange={handleChange} />

                <label>DATE</label>
                <input name="date" value={form.date} onChange={handleChange} />

                <button onClick={generatePDF}>DOWNLOAD CV</button>
            </div>

            {/* ================= CV PREVIEW ================= */}
            <div className="cv-page" ref={cvRef}>

                {/* HEADER */}
                <div className="header">
                    <h1>{form.name}</h1>
                    <p>{form.phone} | {form.email}</p>
                    <p>{form.linkedin} | {form.github}</p>
                </div>

                {/* PROFILE */}
                <section>
                    <h2>PROFILE SUMMARY</h2>
                    <p>{form.summary}</p>
                </section>

                {/* SKILLS */}
                <section>
                    <h2>TECHNICAL SKILLS</h2>

                    {form.skills
                        .trim()
                        .split("\n")
                        .map((line, index) => (
                            <p key={index}>• {line}</p>
                        ))}
                </section>

                {/* PROJECTS */}
                <section>
                    <h2>PROJECTS</h2>

                    <div className="item">
                        {form.project1
                            .trim()
                            .split("\n")
                            .map((line, i) => (
                                <p key={i}> {line}</p>
                            ))}
                    </div>

                    <div className="item">
                        {form.project2
                            .trim()
                            .split("\n")
                            .map((line, i) => (
                                <p key={i}> {line}</p>
                            ))}
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section>
                    <h2>WORK EXPERIENCE</h2>

                    <div className="item">
                        {form.exp1
                            .trim()
                            .split("\n")
                            .map((line, i) => (
                                <p key={i}> {line}</p>
                            ))}
                    </div>

                    <div className="item">
                        {form.exp2
                            .trim()
                            .split("\n")
                            .map((line, i) => (
                                <p key={i}> {line}</p>
                            ))}
                    </div>
                </section>

                {/* CERTIFICATIONS */}
                <section>
                    <h2>CERTIFICATIONS</h2>

                    {form.certifications
                        .trim()
                        .split("\n")
                        .map((item, index) => (
                            <p key={index}>• {item}</p>
                        ))}
                </section>
                {/* EDUCATION */}
                <section>
                    <h2>EDUCATION</h2>

                    {form.education
                        .trim()
                        .split("\n")
                        .map((line, i) => (
                            <p key={i}>• {line}</p>
                        ))}
                </section>

                {/* FOOTER (SIMPLE + CLEAN) */}
                <div className="footer">
                    <span>{form.place}</span>
                    <span>{form.date}</span>
                    <span className="sign">{form.name}</span>
                </div>

            </div>
        </div>
    );
};

export default CvGenerator;