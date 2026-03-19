import React, { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [isLecturesExpanded, setIsLecturesExpanded] = useState(false);
  const [isResearchExpanded, setIsResearchExpanded] = useState(false);

  return (
    <div className="container">
      <div className="profile-header card">
        <div className="profile-banner">
          <GitHubCalendar 
            username="PolyGon-13" 
            renderBlock={(block, activity) =>
              React.cloneElement(block, {
                'data-tooltip-id': 'github-tooltip',
                'data-tooltip-content': activity.count === 0
                  ? `${activity.date}: No contributions`
                  : `${activity.date}: ${activity.count} contribution${activity.count !== 1 ? 's' : ''}`,
              } as any)
            }
          />
          <Tooltip 
            id="github-tooltip" 
            style={{
              fontSize: '12px',
              padding: '4px 8px',
              borderRadius: '4px',
              backgroundColor: '#1f2937',
              color: '#ffffff',
              zIndex: 9999,
            }}
          />
        </div>
        <div className="profile-info">
          <div className="profile-photo">
            <div className="photo-placeholder">DK</div>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">Donghyun Kim</h1>
            <h2 className="profile-headline">BS Student in Robotics at Hanyang University</h2>
            <p className="profile-email"><a href="mailto:hyundiego@hanyang.ac.kr">hyundiego@hanyang.ac.kr</a></p>
            <div className="social-links">
              <a href="https://github.com/PolyGon-13" className="social-github" target="_blank" rel="noreferrer" title="GitHub">
                <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/donghyun-kim-a15770298" className="social-linkedin" target="_blank" rel="noreferrer" title="LinkedIn">
                <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.847-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://polygon1113.tistory.com/" className="social-tistory" target="_blank" rel="noreferrer" title="Tistory Blog">
                <svg height="24" width="24" viewBox="0 0 24 24" className="tistory-svg"><circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1" /><text x="12" y="16" fill="currentColor" fontSize="14" fontWeight="bold" textAnchor="middle">T</text></svg>
              </a>
              <a href="https://youtube.com/@polygon-1113?si=42pQlFtwky6oLp48" className="social-youtube" target="_blank" rel="noreferrer" title="YouTube">
                <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 6.186a2.656 2.656 0 0 0-1.874-1.874C18.053 3.867 12 3.867 12 3.867s-6.053 0-7.708.445A2.656 2.656 0 0 0 2.418 6.186C1.973 7.842 1.973 12 1.973 12s0 4.158.445 5.814a2.656 2.656 0 0 0 1.874 1.874c1.655.445 7.708.445 7.708.445s6.053 0 7.708-.445a2.656 2.656 0 0 0 1.874-1.874c.445-1.656.445-5.814.445-5.814s0-4.158-.445-5.814zM9.988 15.48V8.52L16.03 12l-6.042 3.48z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="main-layout">
        <div className="main-column">
          
          {/* 1. About */}
          <div className="about-section card">
            <h3>About</h3>
            <div className="about-interests" style={{ color: 'var(--text-primary)' }}>
              <strong>My Interests</strong>
              <ul className="bullet-list" style={{ marginTop: '12px' }}>
                <li>Robotics</li>
                <li>SLAM</li>
              </ul>
            </div>
          </div>

          {/* 2. Experience */}
          <div className="experience-section card">
            <h3>Experience</h3>
            <div className="experience-item">
              <h4>Instructor</h4>
              <p className="experience-subtitle">DORO.Co.Ltd &middot; Freelance</p>
              <p className="experience-date">2025.11 - Present</p>

              <div className="exp-accordion">
                <button 
                  className="exp-accordion-btn" 
                  onClick={() => setIsLecturesExpanded(!isLecturesExpanded)}
                >
                  <span className="expand-icon">{isLecturesExpanded ? '▼' : '▶'}</span>
                  <span className="exp-accordion-title">Lectures</span>
                </button>
                <div className={`exp-accordion-content ${isLecturesExpanded ? 'expanded' : ''}`}>
                  <div className="exp-accordion-inner">
                    <ul className="experience-desc-list">
                      <li>88로봇위크 강사 - AI NOVA(모바일 로봇), XArm(로봇팔) 체험 (25.11.01)</li>
                      <li>단청수 안단테 부스 - XArm(로봇팔)을 이용한 부루마블 (25.11.08)</li>
                      <li>도로랜드 CH1,2 - 모바일 로봇, 마블머신 (26.01.30~26.02.01)</li>
                      <li>도로랜드 CH1 - 모바일 로봇 (26.02.02~26.02.03)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="divider" />
            <div className="experience-item">
              <h4>Robotics Researcher (Freelance)</h4>
              <p className="experience-subtitle">Korea Atomic Energy Research Institute (KAERI)</p>
              <p className="experience-date">2025.08 - 2025.10 &middot; Daejeon, South Korea</p>
              <div className="exp-accordion">
                <button 
                  className="exp-accordion-btn" 
                  onClick={() => setIsResearchExpanded(!isResearchExpanded)}
                >
                  <span className="expand-icon">{isResearchExpanded ? '▼' : '▶'}</span>
                  <span className="exp-accordion-title">Research</span>
                </button>
                <div className={`exp-accordion-content ${isResearchExpanded ? 'expanded' : ''}`}>
                  <div className="exp-accordion-inner">
                    <ul className="experience-desc-list">
                      <li>Integrated Doosan A0509 and Agilex PiPER using Hand Tracking and Go2 systems.</li>
                      <li>Ported a Virtual Hot Cell facility to Unity VR with object interactions.</li>
                      <li>Implemented Digital Twin infrastructure integrating LS PLC systems.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Education */}
          <div className="education-section card">
            <h3>Education</h3>
            <div className="experience-item">
              <h4>Hanyang University</h4>
              <p className="experience-subtitle">Bachelor's Degree, Robotics</p>
              <p className="experience-date">2023.03 - 2028.02</p>
              <ul className="experience-desc-list">
                <li><strong>GPA:</strong> 4.27 / 4.5</li>
                <li><strong>Societies & Clubs:</strong> HY-MEC, AutoSlot (창업 동아리)</li>
                <li>Republic of Korea Army (2024.02 - 2025.08)</li>
              </ul>
            </div>
          </div>

          {/* 4. Publications */}
          <div className="publications-section card">
            <h3>Publications</h3>
            <div className="experience-item">
              <h4>Laboratory Automation of Pyroprocessing Using a Digital Twin-Enabled Dry Mock-Up</h4>
              <p className="experience-subtitle">Korean Radioactive Waste Society (2-P-52)</p>
              <p className="experience-date">2025.11.12</p>
            </div>
          </div>

          {/* 5. Honors & Awards */}
          <div className="awards-section card">
             <h3>Honors & Awards</h3>
             <ul className="bullet-list">
               <li><strong>3rd Prize(우수상)</strong> - ERICA CTO StartUp Ton (2026.01)</li>
               <li><strong>2nd Prize(국가표준원장상)</strong> - 2025 IRC International Robotics Olympiad (AI Autonomous Driving) (2025.10)</li>
               <li><strong>Academic Excellence Scholarship</strong> (2024.01)</li>
               <li><strong>Excellence Award</strong> - Intelligence Robot WE-MEET Project Integrated Competition (2023.12)</li>
               <li><strong>Academic Excellence Scholarship</strong> (2023.08)</li>
             </ul>
          </div>


          
          {/* 7. Licenses & Certifications */}
          <div className="certification-section card">
            <h3>Licenses & Certifications</h3>
            <ul className="bullet-list">
              <li><strong>리눅스마스터 2급</strong> &middot; 한국정보통신진흥협회 (2026.03)</li>
              <li><strong>지게차운전기능사</strong> &middot; 국토교통부 &middot; 25631503095C (2025.06)</li>
              <li><strong>컴퓨터활용능력 1급</strong> &middot; 대한상공회의소 &middot; 25-K9-016143 (2025.03)</li>
              <li><strong>워드프로세서</strong> &middot; 대한상공회의소 &middot; 24-I9-010370 (2024.11)</li>
              <li><strong>한국사능력검정시험 1급</strong> &middot; 국사편찬위원회 &middot; 72-111165 (2024.10)</li>
              <li><strong>상공회의소 한자 3급</strong> &middot; 대한상공회의소 &middot; 24-V9-004171 (2024.09)</li>
              <li><strong>ITQ OA Master</strong> &middot; 한국생산성본부 &middot; A001-2015109-003592 (2023.06)</li>
              <li><strong>태권도 3단</strong> &middot; 국기원 &middot; 21115931 (2016.06)</li>
            </ul>
          </div>
          
          {/* 8. Volunteering */}
          <div className="volunteer-section card">
            <h3>Volunteering</h3>
            <div className="experience-item compact">
              <h4>Peer Mentor (Engineering Mathematics II)</h4>
              <p className="experience-date">2026.03 - Present</p>
            </div>
            <div className="experience-item compact">
              <h4>Hamile: Mentoring Program for International Students</h4>
              <p className="experience-date">2023.09 - 2023.11</p>
            </div>
          </div>

        </div>

        <div className="sidebar-column">
          <div className="skills-section card">
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>Arduino</li>
              <li>Raspberry Pi</li>
              <li>Python</li>
              <li>C++</li>
              <li>ROS 2</li>
              <li>Unity</li>
              <li>PLC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
