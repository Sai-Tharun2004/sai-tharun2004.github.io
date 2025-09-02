/* General */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background: #f8f9fa;
  color: #333;
  line-height: 1.6;
  transition: background 0.3s, color 0.3s;
}

header {
  background: #111;
  color: #fff;
  padding: 3rem 1rem;
  text-align: center;
}

header h1 {
  font-size: 2.5rem;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease;
}

header p {
  font-size: 1.2rem;
  color: #bbb;
  opacity: 0;
  transform: translateY(20px);
  transition: all 1.5s ease;
}

nav {
  display: flex;
  justify-content: center;
  background: #222;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  transition: background 0.3s;
}

nav a:hover {
  background: #444;
}

section {
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #111;
}

/* Cards */
.skills, .experience, .education, .achievements {
  display: grid;
  gap: 1.5rem;
}

.card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.3s;
  opacity: 0;
  transform: translateY(30px);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

/* Contact */
.contact-info {
  text-align: center;
}

.contact-info a {
  display: inline-block;
  margin: 0.5rem;
  color: #007bff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.resume-btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  margin-top: 1rem;
  background: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;
}

.resume-btn:hover {
  background: #0056b3;
}

/* Dark Mode */
body.dark {
  background: #121212;
  color: #eee;
}

body.dark header {
  background: #1e1e1e;
}

body.dark nav {
  background: #333;
}

body.dark .card {
  background: #1e1e1e;
  color: #ddd;
}

#darkModeToggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border: none;
  background: #007bff;
  color: white;
  font-size: 1.2rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

#darkModeToggle:hover {
  background: #0056b3;
}

/* Fade In Animation */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
