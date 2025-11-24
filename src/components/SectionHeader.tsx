interface SectionHeaderProps {
  children: React.ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="w-full mb-12" style={{ backgroundColor: '#C8102E', padding: '20px 0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 style={{ 
          fontFamily: "'Montserrat', sans-serif", 
          color: '#FFFFFF', 
          fontWeight: '800',
          textAlign: 'center',
          margin: 0,
          fontSize: '32px',
          letterSpacing: '0.5px'
        }}>
          {children}
        </h2>
      </div>
    </div>
  );
}