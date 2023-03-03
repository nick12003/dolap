import CenterWrapper from "@/components/CenterWrapper";

export default function Home() {
  return (
    <div>
      <header className='sticky top-0 z-10 border-b border-slate-900/10 bg-gray-100/70 backdrop-blur transition-colors py-3 shadow-lg'>
        <CenterWrapper className='select-none'>
          <span className='font-AudioWide text-primary'>Dolap</span>
        </CenterWrapper>
      </header>
    </div>
  );
}
