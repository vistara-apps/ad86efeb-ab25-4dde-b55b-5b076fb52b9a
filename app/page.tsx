'use client';

import { useState, useEffect } from 'react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp,
  FileCheck,
  Users,
  Activity
} from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading QualityVerse...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">QualityVerse</h1>
                <p className="text-xs text-fg/60">On-chain Quality Assurance</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-16 relative">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-fg mb-4">
              Manufacturing Excellence,
              <span className="text-primary"> Verified On-Chain</span>
            </h2>
            <p className="text-lg text-fg/70 mb-8">
              Immutable quality records, collaborative defect resolution, and verifiable certifications powered by Base blockchain.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20">
                Report Defect
              </button>
              <button className="px-6 py-3 bg-surface text-fg rounded-lg font-semibold hover:bg-surface/80 transition-all duration-200 border border-white/10">
                View Certifications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Activity className="w-6 h-6" />}
            label="Active Lines"
            value="12"
            trend="+2 this week"
            trendUp
          />
          <StatCard
            icon={<AlertTriangle className="w-6 h-6" />}
            label="Open Defects"
            value="8"
            trend="-4 from yesterday"
            trendUp={false}
          />
          <StatCard
            icon={<CheckCircle2 className="w-6 h-6" />}
            label="Certifications"
            value="156"
            trend="+12 today"
            trendUp
          />
          <StatCard
            icon={<Users className="w-6 h-6" />}
            label="Contributors"
            value="47"
            trend="+3 this month"
            trendUp
          />
        </div>
      </section>

      {/* Recent Activity */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-fg">Recent Activity</h3>
          <button className="text-primary hover:text-primary/80 text-sm font-semibold">
            View All →
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Defect Reports */}
          <div className="bg-surface rounded-lg border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-warning" />
              <h4 className="font-semibold text-fg">Recent Defects</h4>
            </div>
            <div className="space-y-3">
              <DefectItem
                id="DEF-2024-001"
                type="Surface Scratch"
                severity="Medium"
                time="2 hours ago"
              />
              <DefectItem
                id="DEF-2024-002"
                type="Dimension Variance"
                severity="Low"
                time="5 hours ago"
              />
              <DefectItem
                id="DEF-2024-003"
                type="Color Mismatch"
                severity="High"
                time="1 day ago"
              />
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-surface rounded-lg border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-5 h-5 text-success" />
              <h4 className="font-semibold text-fg">New Certifications</h4>
            </div>
            <div className="space-y-3">
              <CertificationItem
                batchId="BATCH-A-2024-045"
                product="Circuit Board Assembly"
                time="1 hour ago"
              />
              <CertificationItem
                batchId="BATCH-B-2024-089"
                product="Motor Housing Unit"
                time="3 hours ago"
              />
              <CertificationItem
                batchId="BATCH-C-2024-112"
                product="Sensor Module"
                time="6 hours ago"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-fg mb-8 text-center">
          Powered by Base Blockchain
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Immutable Records"
            description="Every defect logged on-chain with cryptographic proof and timestamp verification."
          />
          <FeatureCard
            icon={<FileCheck className="w-8 h-8" />}
            title="NFT Certifications"
            description="Verifiable quality certificates as soul-bound tokens for complete traceability."
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Reputation System"
            description="Earn on-chain reputation for contributions to quality improvement initiatives."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-fg/60 text-sm">
                Built on Base • Powered by OnchainKit
              </span>
            </div>
            <div className="flex gap-6 text-sm text-fg/60">
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StatCard({ 
  icon, 
  label, 
  value, 
  trend, 
  trendUp 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  trend: string; 
  trendUp: boolean;
}) {
  return (
    <div className="bg-surface rounded-lg border border-white/10 p-6 hover:border-primary/50 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="text-primary">{icon}</div>
        <span className={`text-xs font-semibold ${trendUp ? 'text-success' : 'text-error'}`}>
          {trend}
        </span>
      </div>
      <div className="text-3xl font-bold text-fg mb-1">{value}</div>
      <div className="text-sm text-fg/60">{label}</div>
    </div>
  );
}

function DefectItem({ 
  id, 
  type, 
  severity, 
  time 
}: { 
  id: string; 
  type: string; 
  severity: string; 
  time: string;
}) {
  const severityColor = {
    High: 'text-error',
    Medium: 'text-warning',
    Low: 'text-success'
  }[severity] || 'text-fg/60';

  return (
    <div className="flex items-center justify-between p-3 bg-bg/50 rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-200 cursor-pointer">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-mono text-fg/80">{id}</span>
          <span className={`text-xs font-semibold ${severityColor}`}>{severity}</span>
        </div>
        <div className="text-sm text-fg/60">{type}</div>
      </div>
      <div className="text-xs text-fg/40">{time}</div>
    </div>
  );
}

function CertificationItem({ 
  batchId, 
  product, 
  time 
}: { 
  batchId: string; 
  product: string; 
  time: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 bg-bg/50 rounded-lg border border-white/5 hover:border-success/30 transition-all duration-200 cursor-pointer">
      <div className="flex-1">
        <div className="text-sm font-mono text-fg/80 mb-1">{batchId}</div>
        <div className="text-sm text-fg/60">{product}</div>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-success" />
        <span className="text-xs text-fg/40">{time}</span>
      </div>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-surface rounded-lg border border-white/10 p-6 hover:border-primary/50 transition-all duration-200">
      <div className="text-primary mb-4">{icon}</div>
      <h4 className="text-lg font-semibold text-fg mb-2">{title}</h4>
      <p className="text-sm text-fg/60 leading-relaxed">{description}</p>
    </div>
  );
}
