import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-center text-gray-600">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm hover:text-gray-900"
      >
        <Github className="w-4 h-4 mr-2" />
        View on GitHub
      </a>
    </footer>
  );
}