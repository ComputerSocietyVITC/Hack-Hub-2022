import * as React from "react";
import { useNav } from '../helpers/customHooks/useNav';
import "../styles/timelinecss.css"

const TimeLine = () => {
  const timelineRef = useNav('Timeline');
  return (
    <>
      <div className="text-center min-h-screen px-8 py-4 sm:px-0" ref={timelineRef} id='timelineContainer'>
        <section className="sm:w-1/3 lg:w-1/5 py-8 mb-8 mx-auto">
          <section className="text-gradPink font-Sansation font-bold text-5xl md:text-6xl text-center">
            TIMELINE
          </section>
          {/* <div className="h-1 w-full rounded-lg bg-white"></div> */}
        </section>
        <section class="timeline-section">
          <div class="timeline-items">

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">31st Jan 2022, 00:00</div>
              <div class="timeline-content">
                <h3>Registration Starts</h3>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">3rd March 2022, 18:00</div>
              <div class="timeline-content">
                <h3>GFG Roadmap to DSA</h3>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">4th March 2022, 12:00</div>
              <div class="timeline-content">
                <h3>Hackathon Starts</h3>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">4th March 2022, 18:00</div>
              <div class="timeline-content">
                <h3>How to succeed as a hacker in a Corporate job?</h3>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">4th March 2022, 23:59</div>
              <div class="timeline-content">
                <h3>Registration Ends</h3>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">5th March 2022, 12:30</div>
              <div class="timeline-content">
                <h3>Blockchain 101 and Career in Web 3.0</h3>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">6th March 2022, 12:00</div>
              <div class="timeline-content">
                <h3>Hackathon Ends</h3>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">8th March 2022, 18:00</div>
              <div class="timeline-content">
                <h3>Results</h3>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default TimeLine;
