// import react from 'react';
import React from 'react';

import '../styles/app.css';
import '../styles/themes/echo.css';
import '../styles/vendors/litepicker.css';
import '../styles/vendors/simplebar.css';
import '../styles/vendors/tiny-slider.css';
import '../styles/vendors/tippy.css';
const SideBar = () => {
    return ( 
        <>
  <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
    <img
      src="dist/images/projects/project1-400x400.jpg"
      alt="Tailwise - Admin Dashboard Template"
    />
  </div>
  <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
    <img
      src="dist/images/projects/project6-400x400.jpg"
      alt="Tailwise - Admin Dashboard Template"
    />
  </div>
  <div className="mt-1.5 text-xs text-slate-500">Wed Sep 2021</div>
  <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
  <a
    className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
    href=""
  >
    <div>
      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
        <img
          src="dist/images/users/user8-50x50.jpg"
          alt="Tailwise - Admin Dashboard Template"
        />
      </div>
    </div>
    <div className="sm:ml-5">
      <div className="font-medium">Posted a status update</div>
      <div className="mt-0.5 text-slate-500">
        Shared thoughts on the project
      </div>
      <div className="mt-1.5 text-xs text-slate-500">Sun May 2021</div>
    </div>
  </a>
  <a
    className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
    href=""
  >
    <div>
      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
        <img
          src="dist/images/users/user8-50x50.jpg"
          alt="Tailwise - Admin Dashboard Template"
        />
      </div>
    </div>
    <div className="sm:ml-5">
      <div className="font-medium">Updated profile picture</div>
      <div className="mt-0.5 text-slate-500">Changed profile photo</div>
      <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
        <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
          <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
            <img
              src="dist/images/projects/project4-400x400.jpg"
              alt="Tailwise - Admin Dashboard Template"
            />
          </div>
          <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
            <img
              src="dist/images/projects/project2-400x400.jpg"
              alt="Tailwise - Admin Dashboard Template"
            />
          </div>
          <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
            <img
              src="dist/images/projects/project3-400x400.jpg"
              alt="Tailwise - Admin Dashboard Template"
            />
          </div>
        </div>
      </div>
      <div className="mt-1.5 text-xs text-slate-500">Sat Nov 2021</div>
    </div>
  </a>
  <a
    className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
    href=""
  >
    <div>
      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
        <img
          src="dist/images/users/user8-50x50.jpg"
          alt="Tailwise - Admin Dashboard Template"
        />
      </div>
    </div>
    <div className="sm:ml-5">
      <div className="font-medium">Uploaded code files</div>
      <div className="mt-0.5 text-slate-500">Added new code modules</div>
      <div className="mt-1.5 text-xs text-slate-500">Sat Mar 2021</div>
    </div>
  </a>
  <a
    className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
    href=""
  >
    <div>
      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
        <img
          src="dist/images/users/user8-50x50.jpg"
          alt="Tailwise - Admin Dashboard Template"
        />
      </div>
    </div>
    <div className="sm:ml-5">
      <div className="font-medium">Received 5 new emails</div>
      <div className="mt-0.5 text-slate-500">Inbox updates</div>
      <div className="mt-1.5 text-xs text-slate-500">Sat Nov 2020</div>
    </div>
  </a>
  <a
    className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
    href=""
  >
    <div>
      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
        <img
          src="dist/images/users/user8-50x50.jpg"
          alt="Tailwise - Admin Dashboard Template"
        />
      </div>
    </div>
    <div className="sm:ml-5">
      <div className="font-medium">Uploaded video files</div>
      <div className="mt-0.5 text-slate-500">Shared video tutorials</div>
      <div className="mt-1.5 text-xs text-slate-500">Mon Nov 2022</div>
    </div>
  </a>
  <a
    className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
    href=""
  >
    <div>
      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
        <img
          src="dist/images/users/user8-50x50.jpg"
          alt="Tailwise - Admin Dashboard Template"
        />
      </div>
    </div>
    <div className="sm:ml-5">
      <div className="font-medium">Uploaded audio recordings</div>
      <div className="mt-0.5 text-slate-500">Recorded podcast episodes</div>
      <div className="mt-1.5 text-xs text-slate-500">Sat Apr 2022</div>
    </div>
    <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
  </a>
</>

     );
}
 
export default SideBar;
