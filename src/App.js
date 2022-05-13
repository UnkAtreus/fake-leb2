import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="flex justify-between items-center max-w-screen-2xl m-auto p-6">
          <img
            src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/590077d2eeeee8691ce9db0b_LE%20LOGO-02.png"
            alt=""
          />
          <div className="flex space-x-4 items-center">
            <div className="cursor-pointer text-sm">หน้าหลัก</div>
            <div className="cursor-pointer text-sm">LEB2 คืออะไร</div>
            <div className="cursor-pointer text-sm">ช่วยเหลือ</div>
            <div className="cursor-pointer text-sm">ฟีเจอร์แนะนำ</div>
            <div className="cursor-pointer text-sm">แกลลอรี่</div>
            <div className="cursor-pointer text-sm">EN | TH</div>
            <button
              className="text-white text-sm bg-primary-color rounded px-6 py-2"
              onClick={() => {
                alert("เว็บปลอมค้าบบ");
              }}
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </header>
      <div className="max-w-screen-2xl m-auto">
        <img
          className="mt-10"
          src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/615c30507dba26e229e2cc51_ENG-LEB2-LOG-IN-TO_1-100.jpg"
          alt=""
        />
        <div className="mt-16 mb-10 -space-y-1">
          <div className="text-[#6c29bd] text-xl">LEB2 Fast Track Tutorial</div>
          <div>(สำหรับนักศึกษา)</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col justify-center space-y-2">
            <img
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/60b499ea49cf88188dff774f_Artboard%204-100.jpg"
              alt=""
            />
            <p className="cursor-pointer hover:text-primary-color">
              การใช้งานเบื้อต้น
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <img
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/60b499eacf5d599d9bac932c_Artboard%206-100.jpg"
              alt=""
            />
            <p className="cursor-pointer hover:text-primary-color">
              การส่งงานและการทำควิซ
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <img
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/60b499ebf51b70ccee077944_Artboard%207-100.jpg"
              alt=""
            />
            <p className="cursor-pointer hover:text-primary-color">
              การเช็คชื่อ
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <img
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/60b499eae7a31755d2fe23c3_Artboard%208-100.jpg"
              alt=""
            />
            <p className="cursor-pointer hover:text-primary-color">
              การเรียนรูปแบบออนไลน์
            </p>
          </div>
        </div>
        <div className="m-auto mt-5">
          <button className="text-white bg-secondary-color hover:bg-primary-color px-10 py-4 rounded-lg shadow-lg text-lg font-normal">
            See More
          </button>
        </div>

        <div className="mt-16 mb-10 -space-y-1">
          <div className="text-[#6c29bd] text-xl">LEB2 Fast Track Tutorial</div>
          <div>(สำหรับอาจารย์)</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col justify-center space-y-2">
            <img
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/60031db8da7fb70be2f019af_Set1Creating%20your%20first%20LE%20class.jpg"
              alt=""
            />
            <p className="cursor-pointer hover:text-primary-color">
              เริ่มต้นการสร้างห้องเรียน
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <img
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/60031db8d7ec716ae813c171_Set2Planning%20your%20class.jpg"
              alt=""
            />
            <p className="cursor-pointer hover:text-primary-color">
              การออกแบบห้องเรียน
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <img
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/60031db8500ee55d3c6e74e1_Set3Performance%20Feedback%20and%20Assessment.jpg"
              alt=""
            />
            <p className="cursor-pointer hover:text-primary-color">
              การสร้างกิจกรรมเพื่อการประเมิน
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <img
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/60031db8a4aa1a3c49d0500e_Set4Distance%20Learning%20Toolkit.jpg"
              alt=""
            />
            <p className="cursor-pointer hover:text-primary-color">
              ฟีเจอร์สำหรับการเรียนรู้
            </p>
          </div>
        </div>
        <div className="m-auto mt-5">
          <button className="text-white bg-secondary-color hover:bg-primary-color px-10 py-4 rounded-lg shadow-lg text-lg font-normal">
            See More
          </button>
        </div>

        <div className="flex mt-36 space-x-8 justify-around ">
          <div className="flex flex-col -space-y-2 rounded-lg shadow-[2px_2px_5px_0_#9781a3] bg-[#f5f5f5] w-44 items-center pt-2 hover:bg-primary-color cursor-pointer">
            <img
              className="w-14"
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/5d15b559faab197f815a5be3_icon1-07.png"
              alt=""
            />
            <p className="font-medium text-lg">Lesson Plan</p>
          </div>
          <div className="flex flex-col -space-y-2 rounded-lg shadow-[2px_2px_5px_0_#9781a3] bg-[#f5f5f5] w-44 items-center pt-2 hover:bg-primary-color cursor-pointer">
            <img
              className="w-14"
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/5d15b5689b7ecbb3f792e9af_icon1-08.png"
              alt=""
            />
            <p className="font-medium text-lg">20Assessment</p>
          </div>
          <div className="flex flex-col -space-y-2 rounded-lg shadow-[2px_2px_5px_0_#9781a3] bg-[#f5f5f5] w-44 items-center pt-2 hover:bg-primary-color cursor-pointer">
            <img
              className="w-14"
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/5d15b5689b7ecbb3f792e9af_icon1-08.png"
              alt=""
            />
            <p className="font-medium text-lg">Online quiz</p>
          </div>
          <div className="flex flex-col -space-y-2 rounded-lg shadow-[2px_2px_5px_0_#9781a3] bg-[#f5f5f5] w-44 items-center pt-2 hover:bg-primary-color cursor-pointer">
            <img
              className="w-14"
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/5d15b579faab19df385a5c52_icon1-11.png"
              alt=""
            />
            <p className="font-medium text-lg">Learning Activity</p>
          </div>
          <div className="flex flex-col -space-y-2 rounded-lg shadow-[2px_2px_5px_0_#9781a3] bg-[#f5f5f5] w-44 items-center pt-2 hover:bg-primary-color cursor-pointer">
            <img
              className="w-14"
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/5d15b5889b7ecba95792e9e1_icon1-09.png"
              alt=""
            />
            <p className="font-medium text-lg">Attendance</p>
          </div>
          <div className="flex flex-col -space-y-2 rounded-lg shadow-[2px_2px_5px_0_#9781a3] bg-[#f5f5f5] w-44 items-center pt-2 hover:bg-primary-color cursor-pointer">
            <img
              className="w-14"
              src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/5d15b5907ad20f99c42b26f0_icon1-10.png"
              alt=""
            />
            <p className="font-medium text-lg">Survey</p>
          </div>
        </div>

        <div className="mt-64 mx-16">
          <div className="flex space-x-4 justify-between items-center">
            <div className="flex flex-col max-w-2xl items-start">
              <p className="text-secondary-color text-xl font-medium">
                Features
              </p>
              <h1 className="text-[#333] font-semibold text-[40px]">
                Lesson Plan
              </h1>
              <p className="text-[#333] font-medium text-[28px] mb-2">
                อิสระของการออกแบบ
              </p>
              <p className="text-justify text-lg">
                วันแรกในชั้นเรียน คือ
                ช่วงเวลาที่ดีที่สุดที่คุณจะสร้างความประทับใจให้แก่ผู้เรียน
                แสดงให้พวกเขาเห็นว่าคุณมีการเตรียมตัวมาเป็นอย่างดี
                มีแผนการสอนที่เป็นประโยชน์และน่าสนใจ เมื่อคุณมีความกระตือรือร้น
                ผู้เรียนก็จะได้รับการสื่อสารผ่านความกระตือรือร้นนี้
                โดยที่คุณไม่ต้องพูดอะไรเลยแถมยังสร้างทัศนคติที่ดีต่อรายวิชาของคุณได้อีกด้วย
              </p>
            </div>
            <div>
              <img
                className="w-[550px] -mt-10"
                src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/5d10a2b8d537c068b92a53db_plan-02-04.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f8f8]">
        <div className="max-w-screen-2xl m-auto">
          <div className="flex justify-between space-x-4 py-16">
            <div className="flex flex-col flex-1 rounded-lg py-10 shadow-lg items-center bg-white">
              <div className="text-secondary-color mb-4 text-xl">
                Assessment Activity
              </div>
              <div className="text-[#333] px-8 text-3xl font-medium mb-6">
                เพราะ 'กิจกรรม' เป็นองค์ประกอบสำคัญสำหรับการเรียนรู้
              </div>
              <div className="text-justify mx-10 text-lg">
                กิจกรรมระหว่างทางมีความหมายมากกว่าการวัดผลปลายเทอมของผู้เรียนว่าสอบผ่านหรือไม่..
                แต่เป็นการเปิดโอกาสให้ผู้เรียนได้แสดงทักษะที่มี
                ได้ฝึกความคิดและฝึกปฏิบัติ
                ทำให้คุณรู้เลยว่าพวกเขาเข้าใจเนื้อหาหรือไม่
                และระบบยังรองรับการส่งการบ้านได้ทุกรูปแบบไม่ว่าจะเป็นไฟล์ pdf
                รูปภาพ หรือวีดีโอโดยที่ไฟล์ของคุณจะถูกเก็บอย่างปลอดภัยไร้กังวล
              </div>
            </div>
            <div className="flex flex-col flex-1 rounded-lg py-10 shadow-lg items-center bg-white">
              <div className="text-secondary-color mb-4 text-xl">
                Online Quiz
              </div>
              <div className="text-[#333] px-8 text-3xl font-medium mb-6">
                เพื่อนซี้! โจทย์ซับซ้อน กว่านี้ก็ยังไหว!
              </div>
              <div className="text-justify mx-10 text-lg">
                ในการสร้างคำถามที่มีประสิทธิภาพ คุณต้องมีทั้งทฤษฎี ทักษะ
                และศิลปะ เพื่อที่จะสร้างโจทย์ที่หลากหลาย
                ลองตั้งคำถามที่มีความซับซ้อนขึ้น ด้วยลูกเล่นต่างๆ
                เพื่อเป็นการฝึกให้ผู้เรียนรู้จักไต่บันไดความคิดจากขั้นที่ง่ายไปสู่ยาก
                และเป็นการเตรียมสมองของพวกเขาสำหรับการเรียนรู้ตลอดทุกช่วงเวลา
              </div>
            </div>
            <div className="flex flex-col flex-1 rounded-lg py-10 shadow-lg items-center bg-white">
              <div className="text-secondary-color mb-4 text-xl">
                Learning Activity
              </div>
              <div className="text-[#333] px-8 text-3xl font-medium mb-6">
                จัดการไฟล์เยอะให้อยู่หมัด!
              </div>
              <div className="text-justify mx-10 text-lg">
                การจัดเก็บไฟล์เป็นปัญหาที่ทุกคนต้องเจอ
                แม้แต่คนที่เป็นระเบียบสุดๆก็หนีไม่พ้น…
                แต่ถึงจะไม่มีคาถาที่เสกให้เอกสารทุกอย่างหายไปในพริบตา
                คุณก็ยังมีตัวช่วยดีๆ
                ที่ช่วยเก็บไฟล์งานได้อย่างเป็นระเบียบและส่งต่อให้ผู้เรียนได้อย่างง่ายดาย
                อีกทั้งยังทำให้คุณมีเวลาทำกิจกรรมส่วนตัวมากขึ้นหลังจากเหนื่อยล้าจากการสอนมาทั้งสัปดาห์
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#2c2b2b]">
        <div className="max-w-screen-lg m-auto ">
          <div className="flex py-10">
            <div>
              <img
                className="mx-8 w-[150px]"
                src="https://uploads-ssl.webflow.com/58dc8cb96e28b69b7d08b7f9/5bf3c44d68f8b2d9f9b73d6b_LEB2-logo.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start mx-8">
              <div className="mb-6 text-xl text-white font-medium">Support</div>
              <div className="flex flex-col space-y-1  items-start">
                <div className="cursor-pointer  text-white">
                  Video Tutorial for Teacher
                </div>
                <div className="cursor-pointer text-white">
                  Video Tutorial for Student
                </div>
                <div className="cursor-pointer text-white">Documentation</div>
              </div>
            </div>

            <div className="flex flex-col items-start mx-8">
              <div className="mb-6 text-xl text-white font-medium">Contact</div>
              <div className="flex flex-col space-y-1  items-start">
                <div className="cursor-pointer  text-white">About us</div>
                <div className="cursor-pointer text-white">jobs</div>
                <div className="cursor-pointer text-white">
                  Facebook : kmuttlearning
                </div>
                <div className="cursor-pointer text-white">
                  Email : leb2@mail.kmutt.ac.th
                </div>
                <div className="cursor-pointer text-white">
                  Location : CB4, 8th floor, KMUTT
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#9797974d]"></div>
          <div className="flex py-3">
            <div className="text-white">© 2018 All Right Reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
