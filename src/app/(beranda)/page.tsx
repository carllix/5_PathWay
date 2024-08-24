export default function Beranda() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      overflow: 'hidden'
    }}>

      <style>
      {`
        @font-face {
          font-family: 'AllRight';
          src: url('/fonts/allright.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `}
      </style>

      <img 
        src="/image-beranda.svg" 
        alt="Beranda"
        style={{ 
          width: '100%',
          height: '100%',
          position: 'absolute',
          objectFit: 'cover',
          maxWidth: '100%',
        }}
        />

      <div style={{
        position: 'absolute',
        top: '200px',
        left: '150px',
        color: 'white',
        fontSize: '150px',
        textShadow: '-2px 4px 4px rgba(0, 0, 0, 0.2)',
        fontFamily: 'allright'
      }}>
        Welcome to
      </div>

      <div style={{
        position: 'absolute',
        top: '450px',
        left: '150px',
        color: 'white',
        fontSize: '300px',
        textShadow: '-2px 4px 4px rgba(0, 0, 0, 0.2)',
        fontFamily: 'allright'
      }}>
        PathWay
      </div>

    </div>
  );
}
