import React from 'react';
import { skillCategories } from '../../data/portfolioData';
import SectionHeader from '../UI/SectionHeader';
import { 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Code2, 
  FileCode2, 
  Globe, 
  Zap, 
  Smartphone, 
  Layers, 
  Cpu, 
  Network, 
  Share2, 
  ShieldCheck, 
  Box, 
  HardDrive, 
  Sliders, 
  GitBranch, 
  PackageCheck, 
  RefreshCw, 
  Cloud, 
  ExternalLink 
} from 'lucide-react';
import './Skills.css';

// Icon mapper helper
const getSkillIcon = (iconName) => {
  const iconMap = {
    Layout: <Layout size={22} />,
    Server: <Server size={22} />,
    Database: <Database size={22} />,
    Terminal: <Terminal size={22} />,
    Code2: <Code2 size={16} />,
    FileCode2: <FileCode2 size={16} />,
    Globe: <Globe size={16} />,
    Zap: <Zap size={16} />,
    Smartphone: <Smartphone size={16} />,
    Layers: <Layers size={16} />,
    Cpu: <Cpu size={16} />,
    Network: <Network size={16} />,
    Share2: <Share2 size={16} />,
    ShieldCheck: <ShieldCheck size={16} />,
    Box: <Box size={16} />,
    HardDrive: <HardDrive size={16} />,
    Sliders: <Sliders size={16} />,
    GitBranch: <GitBranch size={16} />,
    PackageCheck: <PackageCheck size={16} />,
    RefreshCw: <RefreshCw size={16} />,
    Cloud: <Cloud size={16} />,
    ExternalLink: <ExternalLink size={16} />,
  };
  return iconMap[iconName] || <Code2 size={16} />;
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          subtitle="Technical Arsenal"
          title="Skills &"
          highlightText="Technologies"
          description="A curated overview of programming languages, microcontrollers & IoT architectures, databases, and developer tools I leverage to build software."
        />

        <div className="skills-categories-grid">
          {skillCategories.map((category) => (
            <div key={category.category} className="glass-card skill-category-card">
              <div className="category-header">
                <div className="category-icon-box">
                  {getSkillIcon(category.icon)}
                </div>
                <h3 className="category-title">{category.category}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-main">
                      <span className="skill-icon">{getSkillIcon(skill.icon)}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
