<template>
  <section class="about" ref="aboutSection">
    <div class="about-header">
      <h2>About</h2>
      <div class="line">
        <div class="highlight" :class="{ animate: isVisible }"></div>
      </div>
    </div>
    <div class="about-content">
      <p class="about-left">
        My love for art, especially graphic design, continues to inspire me as I pursue Computer Science. I believe that art and technology can create limitless possibilities, and I'm passionate about merging both worlds to craft innovative digital experiences that spark creativity and bring ideas to life.
      </p>
      <div class="about-right">
        <p>
          As a Computer Science student, I am passionate about exploring the fusion of art and technology, creating digital experiences that not only function flawlessly but also inspire through creativity and design. My <span class="tools-skills">tools and skills</span> revolve around UI/UX design, graphic design, and front-end development.
        </p>
        <div class="skills">
          <div class="skill" v-for="tool in tools" :key="tool.name" :class="{ fadeIn: isVisible }">
            <img :src="tool.icon" :alt="tool.name" class="skill-image" />
            <div class="tooltip">{{ tool.name }} - {{ tool.category }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <br>
  <br>

 <section class="education">
  <div class="education-header">
    <h2>Education</h2>
    </div>
    <div class="education-content">
      <div class="school">
        <h3>Bachelor of Science in Computer Science</h3>
        <p class="year">Specialization in Cyber Security and Forensics, Asia Pacific College, 2023 - Present</p>
        <br>
        <ul class="achievements">
          <li>Qualified for Dean's Lister 2023-2024</li>
        </ul>
      </div>
      <div class="school">
        <h3>Science, Technology, Engineering, and Mathematics</h3>
        <p class="year">Immaculate Heart of Mary College - Paranaque, 2021 - 2023</p>
        <ul class="achievements">
          <br>
          <li>Graduated with Honors</li>
          <li>Participated in 15th DLSU Arts Congress</li>
          <li>STEM Society Social Media Manager (2022-2023)</li>
          <li>STEM Society Assistant Social Media Manager (2021-2022)</li>
          <li>Achievements in Academic and Extracurricular Activities</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const aboutSection = ref(null);

const tools = [
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/adobephotoshop.svg', category: 'Design Tool' },
  { name: 'Canva', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/canva.svg', category: 'Design Tool' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/figma.svg', category: 'Design Tool' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/vuedotjs.svg', category: 'Frontend' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg', category: 'Frontend' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg', category: 'Programming Language' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/flask.svg', category: 'Backend' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/java.svg', category: 'Programming Language' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg', category: 'Programming Language' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/html5.svg', category: 'Frontend' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/css3.svg', category: 'Frontend' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/visualstudiocode.svg', category: 'Tool' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg', category: 'Version Control' },
  { name: 'Ubuntu', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/ubuntu.svg', category: 'Operating System' },
  { name: 'Kali Linux', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/kalilinux.svg', category: 'Operating System' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/bootstrap.svg', category: 'Frontend' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/git.svg', category: 'Version Control' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg', category: 'Database' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/supabase.svg', category: 'Backend' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/vercel.svg', category: 'Deployment' }
];

const handleScroll = () => {
  const section = aboutSection.value;
  if (section) {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight * 0.75) {
      isVisible.value = true;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
</script>

<style scoped>
.about {
  padding: 3rem 0;
}

.about-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

h2 {
  color: #000000;
  font-weight: bold;
  font-family: 'Recoleta Alt SemiBold';
}

.line {
  flex: 1;
  height: 1.5px;
  background-color: #000000;
  position: relative;
}

.highlight {
  width: 10px; /* Circle size */
  height: 10px;
  background-color: black;
  border-radius: 50%; /* Circle shape */
  position: absolute;
  right: 0; /* Start at the end */
  top: 50%;
  transform: translateY(-50%); /* Center vertically */
  opacity: 0; /* Hidden by default */
  transition: opacity 0.5s ease-in-out, transform 1s ease-in-out;
}

.highlight.animate {
  opacity: 1; /* Show circle */
  transform: translateY(-50%) scale(1.2); /* Slight bounce effect */
}

.about-content {
  display: flex;
  gap: 5rem;
  margin-top: 2rem;
}

.about-left {
  transition: transform 0.3s ease-in-out;
}

.about-right p {
  transition: transform 0.3s ease-in-out;
}

.about-left:hover {
  transform: scale(1.02);
}

.about-right p:hover {
  transform: scale(1.02);
}

.about-content p {
  font-family: 'HelveticaNeueRoman'; /* Change the font */
  line-height: 1.6; /* Optional: Adjust line spacing */
  color: #000000; /* Optional: Text color */
  text-align: justify; /* Justifies the text */

}

.about-right p {
  font-family: 'HelveticaNeueRoman'; /* Regular text font */
}

.tools-skills {
  font-family: 'HelveticaNeueBold'; /* Different font for tools and skills */
  color: #000000; /* Optional: Different color */
}

.skills {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (max-width: 1024px) {
  .skills {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .skills {
    grid-template-columns: repeat(2, 1fr);
  }
}

.skill {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #f8f8f8; */
  padding: 1rem;
  border-radius: 8px;
  /* border: 1px solid black; */
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.skill.fadeIn { 
  opacity: 1;
  transform: scale(1.05);
}

.skill:hover {
  transform: scale(1.1);
}

.skill-image {
  width: 50px;
  height: 50px;
}

.tooltip {
  position: absolute;
  background: black;
  color: white;
  padding: 0.3rem 0.7rem;
  font-size: 0.5rem;
  border-radius: 5px;
  bottom: 10px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(10px);
  z-index: 1;
}

.skill:hover .tooltip {
  opacity: 1;
  transform: translateY(0);
}

.education {
  padding: 3rem 0;
}

.education-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.education h2 {
  color: #000000;
  font-weight: bold;
  font-family: 'Recoleta Alt SemiBold';
}

.education-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
}

.school {
  /* background: #080808; */
  padding: 1.5rem;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  border-color: black;
  flex: 1;
}

.school:hover {
  transform: scale(1.02);
}

.school h3 {
  font-family: 'HelveticaNeueMedium';
  color: #000000;
  margin-bottom: 0.5rem;
}

.school p {
  font-family: 'HelveticaNeueLight';
  font-style: none;
  /* color: #000000; */
  margin-bottom: 0.5rem;
}

.year {
  font-style: italic;
  color: #000000;
}

.achievements {
  margin-top: 0.5rem;
  padding-left: 1.5rem;
  color: #000000;
}

.achievements li {
  margin-bottom: 0.5rem;
  font-family: 'HelveticaNeueRoman';
}

@media (max-width: 768px) {
  .education-content {
    flex-direction: column;
  }
}
</style>
