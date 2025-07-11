// src/pages/AboutPage.tsx

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-radiant-blue mb-6">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-dark-text">
          Why I Built The Geek Toolbox
        </p>
      </div>
      
      <div className="prose prose-lg mx-auto text-dark-text max-w-none">
        <p className="text-base md:text-lg leading-relaxed mb-6">
          My name is Desmond, and I've spent over two decades helping businesses solve problems through IT — from configuring networks to managing far-flung resources. I've worn many hats: Support Technician, Network Engineer, Systems Admin, IT Manager — and each role taught me something essential about how people use technology… and how often it lets them down.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Through all that experience, one thing became crystal clear: <strong className="text-radiant-blue">the best solutions are not the most complex — they're the most human</strong>.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed mb-6">
          That insight gave birth to <strong className="text-warm-coral">The Geek Toolbox</strong> — my mission-driven studio where we design and develop <strong>custom digital tools</strong> for professionals, teams, and entrepreneurs in Ghana.
        </p>
        
        <div className="bg-soft-gray p-4 md:p-6 rounded-card mt-8">
          <p className="text-base md:text-lg leading-relaxed">
            Whether it's a <strong className="text-fresh-mint">workflow-driven web application</strong> or a <strong className="text-electric-purple">conversion-focused business website</strong>, I build every solution with two things in mind:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-radiant-blue">➤</span>
              What <em>you</em> need it to do
            </li>
            <li className="flex items-center gap-2">
              <span className="text-radiant-blue">➤</span>
              What <em>your users</em> need it to feel like
            </li>
          </ul>
        </div>
        
        <p className="text-base md:text-lg leading-relaxed mt-8 text-center italic">
          Technology isn't magic. But when done right, it feels like it.
        </p>
      </div>
    </div>
  );
}
