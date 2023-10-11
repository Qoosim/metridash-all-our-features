import React from 'react';
import { AiOutlineGlobal, AiOutlineOrderedList, AiOutlineCloudDownload } from 'react-icons/ai';
import { BiDownload, BiSearch } from 'react-icons/bi';
import { BsCcCircle, BsShare, BsMic } from 'react-icons/bs';
import { LiaSyncSolid, LiaImage, LiaQuoteRightSolid } from 'react-icons/lia';
import { PiPencilSimpleLineBold, PiPencilSimpleDuotone } from 'react-icons/pi';
import { FiUpload } from 'react-icons/fi';
import { TbDrone } from 'react-icons/tb';
import Card from '../Card/Card';
import styles from './homepage.module.css';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-col items-center gap-3">
        <div>
          <a href="#" className="text-blue-500 font-bold">Why choose Otter.ai?</a>
        </div>
        <h1 className="text-[2.5rem] font-bold">All our features</h1>
        <div className={`flex flex-col items-center pb-16 ${styles.features}`}>
          <span>The breakdown of our features</span>
          <span>and some upcoming ones</span>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid auto-rows-auto gap-6">
            <Card
              icon={<AiOutlineGlobal size={25} className="text-slate-300 col-span-12" />}
              title={"Otter for iOS, Andriod, Web"}
              text={<><span>Use Otter on all the platforms</span><br /><span>that you work on</span></>}
              bgColor={`bg-white`}
              textColor={`text-[#9a9a9a]`}
              bgIcon={`bg-[#0079FF]`}
            />
            <div className="grid grid-cols-2 items-start gap-6">
              <div className='grid gap-6'>
                <Card
                  icon={<BiDownload size={25} className="text-slate-300" />}
                  title={<><span>Import pre-recorded</span><br /><span>audio/video files</span></>}
                  bgColor={`bg-white`}
                  bgIcon={`bg-[#0079ff]`}
                />
                <Card
                  icon={<BiSearch size={25} className="text-slate-100" />}
                  title={<><span>Search notes by</span><br /><span>keywords, speaker,</span><br /><span>date</span></>}
                  bgColor={`bg-white`}
                  bgIcon={`bg-[#FFC0CB]`}
                />
                <Card
                  icon={<AiOutlineOrderedList size={25} className="text-slate-100" />}
                  title={<><span>Summary keywords</span><br /><span>and word clouds</span></>}
                  bgColor={`bg-white`}
                  bgIcon={`bg-[#3adab8]`}
                />
                <Card
                  icon={<PiPencilSimpleLineBold size={25} className="text-slate-100" />}
                  title={<><span>Upload audio, text,</span><br /><span>and video to the clouds</span></>}
                  bgColor={`bg-white`}
                  bgIcon={`bg-[#87CEEB]`}
                />
              </div>
              <div className='grid gap-6'>
                <Card
                  icon={<BsCcCircle size={25} className="text-slate-300" />}
                  title={<><span>Live captions for</span><br /><span>Zoom and Goggle</span><br /><span>meet</span></>}
                  bgColor={`bg-white`}
                  bgIcon={`bg-[#0079ff]`}
                />
                <Card
                  icon={<LiaSyncSolid size={25} className="text-indigo-500" />}
                  title={<><span>Synch from Zoom and </span><br /><span>Dropbox</span></>}
                  bgColor={`bg-[#624aa1]`}
                  titleColor={`text-white`}
                  bgIcon={`bg-white`}
                />
                <Card
                  icon={<LiaImage size={25} className="text-slate-100" />}
                  title={<><span>Inline images</span></>}
                  bgColor={`bg-white`}
                  bgIcon={`bg-[#3adab8]`}
                />
                <Card
                  icon={<FiUpload size={25} className="text-slate-100" />}
                  title={<><span>Export audio, text,</span><br /><span>video files</span></>}
                  bgColor={`bg-white`}
                  bgIcon={`bg-[#3adab8]`}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-start gap-6">
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 items-start gap-6">
              <div className='grid gap-6'>
                <Card
                  icon={<LiaQuoteRightSolid size={25} className="text-[#3adab8]" />}
                  title={<><span>Otter learns your</span><br /><span>custom vocabulary</span></>}
                  bgColor={`bg-[#26C411]`}
                  titleColor={`text-white`}
                  bgIcon={`bg-[#fff]`}
                />
                <Card
                  icon={<AiOutlineCloudDownload size={25} className="text-slate-100" />}
                  title={<><span>Playback Control</span></>}
                  text={<><span>The best experience to</span><br /><span>play back meetings with</span><br /><span>synced audio and text, and</span><br />playback speed control</>}
                  bgColor={`bg-white`}
                  textColor={`text-[#9a9a9a]`}
                  bgIcon={`bg-[#3adab8]`}
                />
                <Card
                  icon={<BsShare size={25} className="text-slate-100" />}
                  title={<><span>Shared via groups</span><br /><span>and links</span></>}
                  bgColor={`bg-white`}
                  bgIcon={`bg-[#87CEEB]`}
                />
              </div>
              <div className='grid gap-6'>
                <Card
                  icon={<BsMic size={25} className="text-slate-100" />}
                  title={<><span>Otter Assistant for</span><br /><span>Zoom, Microsoft</span><br /><span>Teams, Google Meet</span></>}
                  bgColor={`bg-white`}
                  bgIcon={`bg-[#0079FF]`}
                />
                <Card
                  icon={<PiPencilSimpleDuotone size={25} className="text-slate-500" />}
                  title={<><span>Edit text, speakers,</span><br /><span>and time codes</span></>}
                  bgColor={`bg-[#FFD700]`}
                  bgIcon={`bg-white`}
                />
                <Card
                  icon={<TbDrone size={25} className="text-slate-100" />}
                  title={<><span>Speaker name</span><br /><span>identification</span></>}
                  bgColor={`bg-white`}
                  bgIcon={`bg-[#3adab8]`}
                />
              </div>
              <div className="grid col-span-2 gap-6">
                <Card
                  icon={<AiOutlineGlobal size={25} className="text-[#0079ff]" />}
                  title={"Useful admin controls"}
                  text={<><span>Centralized billing, user</span><br /><span>management and reporting</span></>}
                  bgColor={`bg-[#0079FF]`}
                  titleColor={`text-white`}
                  textColor={`text-white`}
                  bgIcon={`bg-white`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default HomePage;
