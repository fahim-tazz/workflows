import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to React Flow with Next.js and TypeScript</h1>
      <Link href="/flow">
        Go to Flow
      </Link>
    </div>
  );
};

export default Home;