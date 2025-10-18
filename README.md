# QualityVerse

On-chain Quality Assurance & Collaborative Optimization for Manufacturing on Base.

## Features

- **Immutable Defect Logging**: Record manufacturing flaws on-chain with complete transparency
- **NFT Certifications**: Verifiable quality certificates as soul-bound tokens
- **Farcaster Integration**: Social-native anomaly reporting and collaboration
- **Reputation System**: Earn on-chain reputation for quality contributions

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Farcaster MiniKit for social features
- Tailwind CSS with BASE theme
- TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OnchainKit API key:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Deployment

Deploy to Vercel:

```bash
vercel
```

## Learn More

- [Base Documentation](https://docs.base.org)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster MiniKit](https://miniapps.farcaster.xyz)

## License

MIT
