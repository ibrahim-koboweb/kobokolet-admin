import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      <p>
        <div className="text-base">
          <span className="text-2xl mr-1">👋 </span>Hi Admin!
        </div>
        <div className="text-xl pt-1">Welcome to your dashboard</div>
      </p>
      <div className="mt-8">
        <div className="grid lg:grid-cols-4 lg:grid-rows-1  xs:grid-cols-2 xs:grid-rows-2   gap-4">
          <div className="bg-white rounded p-3 h-16">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.35 13.5917C14.4127 13.5818 13.4993 13.2949 12.7248 12.767C11.9503 12.2391 11.3492 11.4938 10.9974 10.625C10.6455 9.75627 10.5586 8.80282 10.7474 7.88472C10.9363 6.96663 11.3926 6.12495 12.0589 5.46564C12.7251 4.80633 13.5715 4.35888 14.4916 4.17962C15.4116 4.00035 16.3641 4.09729 17.2291 4.45823C18.0941 4.81917 18.8331 5.42797 19.3528 6.20799C19.8726 6.988 20.1499 7.90435 20.15 8.84167C20.1412 10.1074 19.6311 11.318 18.7314 12.2084C17.8317 13.0987 16.6157 13.5961 15.35 13.5917ZM15.35 5.75834C14.7424 5.76819 14.1513 5.95737 13.6508 6.30211C13.1504 6.64684 12.763 7.13176 12.5373 7.69597C12.3115 8.26017 12.2576 8.87849 12.3821 9.47327C12.5067 10.068 12.8042 10.6128 13.2374 11.039C13.6705 11.4652 14.2199 11.7539 14.8166 11.8689C15.4133 11.9839 16.0307 11.92 16.5912 11.6852C17.1517 11.4504 17.6303 11.0553 17.967 10.5494C18.3036 10.0435 18.4833 9.44935 18.4833 8.84167C18.4745 8.01798 18.14 7.23126 17.5529 6.65349C16.9657 6.07572 16.1737 5.75389 15.35 5.75834Z"
                fill="#46A578"
              />
              <path
                d="M15.35 13.5917C14.4127 13.5818 13.4993 13.2949 12.7248 12.767C11.9503 12.2391 11.3492 11.4938 10.9974 10.625C10.6455 9.75627 10.5586 8.80282 10.7474 7.88472C10.9363 6.96663 11.3926 6.12495 12.0589 5.46564C12.7251 4.80633 13.5715 4.35888 14.4916 4.17962C15.4116 4.00035 16.3641 4.09729 17.2291 4.45823C18.0941 4.81917 18.8331 5.42797 19.3528 6.20799C19.8726 6.988 20.1499 7.90435 20.15 8.84167C20.1412 10.1074 19.6311 11.318 18.7314 12.2084C17.8317 13.0987 16.6157 13.5961 15.35 13.5917ZM15.35 5.75834C14.7424 5.76819 14.1513 5.95737 13.6508 6.30211C13.1504 6.64684 12.763 7.13176 12.5373 7.69597C12.3115 8.26017 12.2576 8.87849 12.3821 9.47327C12.5067 10.068 12.8042 10.6128 13.2374 11.039C13.6705 11.4652 14.2199 11.7539 14.8166 11.8689C15.4133 11.9839 16.0307 11.92 16.5912 11.6852C17.1517 11.4504 17.6303 11.0553 17.967 10.5494C18.3036 10.0435 18.4833 9.44935 18.4833 8.84167C18.4745 8.01798 18.14 7.23126 17.5529 6.65349C16.9657 6.07572 16.1737 5.75389 15.35 5.75834ZM18.2583 14.7083C14.5621 14.0652 10.757 14.6506 7.425 16.375C7.18848 16.5063 6.99263 16.7002 6.85888 16.9353C6.72513 17.1705 6.65864 17.4379 6.66667 17.7083V20.675C6.66667 20.896 6.75446 21.108 6.91074 21.2643C7.06702 21.4205 7.27899 21.5083 7.5 21.5083C7.72101 21.5083 7.93297 21.4205 8.08925 21.2643C8.24553 21.108 8.33333 20.896 8.33333 20.675V17.8167C11.4231 16.2664 14.9367 15.7745 18.3333 16.4167L18.2583 14.7083Z"
                fill="#46A578"
              />
              <path
                d="M27.5 18.3333H21.9167V17.1C21.9167 16.879 21.8289 16.667 21.6726 16.5107C21.5163 16.3545 21.3044 16.2667 21.0833 16.2667C20.8623 16.2667 20.6504 16.3545 20.4941 16.5107C20.3378 16.667 20.25 16.879 20.25 17.1V18.3333H14.1667C13.9457 18.3333 13.7337 18.4211 13.5774 18.5774C13.4211 18.7337 13.3333 18.9456 13.3333 19.1667V27.5C13.3333 27.721 13.4211 27.933 13.5774 28.0893C13.7337 28.2455 13.9457 28.3333 14.1667 28.3333H27.5C27.721 28.3333 27.933 28.2455 28.0893 28.0893C28.2455 27.933 28.3333 27.721 28.3333 27.5V19.1667C28.3333 18.9456 28.2455 18.7337 28.0893 18.5774C27.933 18.4211 27.721 18.3333 27.5 18.3333ZM26.6667 26.6667H15V20H20.25V20.3417C20.25 20.5627 20.3378 20.7746 20.4941 20.9309C20.6504 21.0872 20.8623 21.175 21.0833 21.175C21.3044 21.175 21.5163 21.0872 21.6726 20.9309C21.8289 20.7746 21.9167 20.5627 21.9167 20.3417V20H26.6667V26.6667Z"
                fill="#46A578"
              />
              <path
                d="M18.175 22.85H23.1417V24.0167H18.175V22.85ZM9.03332 10.2C6.72619 10.2386 4.45907 10.8089 2.40832 11.8667C2.18529 11.9845 1.99847 12.1607 1.86784 12.3764C1.7372 12.5922 1.66766 12.8394 1.66666 13.0917V15.675C1.66666 15.896 1.75445 16.108 1.91073 16.2643C2.06701 16.4205 2.27898 16.5083 2.49999 16.5083C2.721 16.5083 2.93297 16.4205 3.08925 16.2643C3.24553 16.108 3.33332 15.896 3.33332 15.675V13.2583C5.29274 12.283 7.46212 11.8051 9.64999 11.8667C9.36374 11.3444 9.15595 10.7828 9.03332 10.2ZM27.5917 11.8583C25.7524 10.8935 23.731 10.3257 21.6583 10.1917C21.5363 10.7734 21.3314 11.3347 21.05 11.8583C23.0025 11.9051 24.9206 12.3832 26.6667 13.2583V15.675C26.6667 15.896 26.7545 16.108 26.9107 16.2643C27.067 16.4205 27.279 16.5083 27.5 16.5083C27.721 16.5083 27.933 16.4205 28.0892 16.2643C28.2455 16.108 28.3333 15.896 28.3333 15.675V13.0917C28.3338 12.838 28.265 12.5891 28.1343 12.3717C28.0036 12.1543 27.8159 11.9768 27.5917 11.8583ZM8.88332 8.84166V8.28333C8.2305 8.19597 7.63653 7.86019 7.22505 7.34591C6.81357 6.83163 6.61628 6.17846 6.67427 5.52238C6.73225 4.86629 7.04104 4.25785 7.53634 3.82371C8.03164 3.38957 8.6753 3.16318 9.33332 3.19166C10.0178 3.19042 10.6756 3.45655 11.1667 3.93333C11.5999 3.57598 12.0757 3.27368 12.5833 3.03333C12.0163 2.38138 11.2651 1.91653 10.4286 1.70005C9.59218 1.48358 8.70976 1.52564 7.89769 1.8207C7.08562 2.11575 6.38201 2.64995 5.8796 3.35287C5.37719 4.0558 5.09957 4.89447 5.08332 5.75833C5.10081 6.81563 5.51182 7.82843 6.23607 8.59891C6.96033 9.36939 7.94579 9.84221 8.99999 9.925C8.9293 9.56802 8.89026 9.2055 8.88332 8.84166ZM20.6417 1.525C20.069 1.52512 19.5021 1.63942 18.9741 1.8612C18.4461 2.08298 17.9676 2.4078 17.5667 2.81666C18.13 3.0208 18.6628 3.30119 19.15 3.65C19.539 3.37994 19.9941 3.22052 20.4666 3.18875C20.9391 3.15698 21.4114 3.25405 21.8331 3.4696C22.2548 3.68515 22.6101 4.0111 22.8611 4.4127C23.1121 4.8143 23.2494 5.27649 23.2583 5.75C23.2531 6.23636 23.1102 6.71129 22.8462 7.11981C22.5822 7.52833 22.2079 7.85373 21.7667 8.05833C21.8002 8.3153 21.8169 8.57418 21.8167 8.83333C21.8144 9.1683 21.7866 9.50261 21.7333 9.83333C22.6411 9.59994 23.4464 9.07298 24.0236 8.33446C24.6008 7.59595 24.9177 6.68731 24.925 5.75C24.914 4.62275 24.4573 3.54567 23.6548 2.75403C22.8522 1.96239 21.7689 1.52054 20.6417 1.525Z"
                fill="#46A578"
              />
            </svg>
          </div>
          <div className="bg-white rounded p-3 h-16">2</div>
          <div className="bg-white rounded p-3 h-16">3</div>
          <div className="bg-white rounded p-3 h-16">4</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid lg:grid-cols-2 lg:grid-rows-1     gap-4">
          <div className="bg-white rounded p-3 h-80">1</div>
          <div className="bg-white rounded p-3 h-80">2</div>
        </div>
      </div>
      {/* <Link to='/engagements' className='underline'>go to engagements</Link> */}
    </div>
  );
};

export default Dashboard;
