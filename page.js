export default function Home() {
    return (
        <div style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '40px', fontFamily: 'system-ui' }}>
            <header style={{ borderBottom: '1px solid #333', paddingBottom: '20px' }}>
                <h1 style={{ fontSize: '2.5rem', margin: '0' }}>Michel Ghazaly</h1>
                <p style={{ color: '#888' }}>Computer & Communications Engineering Student</p>
            </header>

            <section style={{ marginTop: '40px' }}>
                <h2 style={{ color: '#0070f3' }}>About Me</h2>
                <p>Currently pursuing my engineering degree at Antonine University, specializing in Multimedia and Network Technologies.</p>
            </section>

            <section style={{ marginTop: '40px' }}>
                <h2 style={{ color: '#0070f3' }}>Technical Stack</h2>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {['C++', 'JavaScript', 'MATLAB', 'Networking (CCNA)', 'Next.js'].map(skill => (
                        <span key={skill} style={{ background: '#222', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem' }}>
              {skill}
            </span>
                    ))}
                </div>
            </section>

            <footer style={{ marginTop: '60px', fontSize: '0.8rem', color: '#444' }}>
                © 2026 Michel Ghazaly • Built with Next.js
            </footer>
        </div>
    );
}