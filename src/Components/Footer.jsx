// import { Link } from "react-router-dom"; // Uncomment when using with React Router

// Temporary Link component for demo purposes
const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-900 via-stone-800 to-amber-900 text-amber-100 py-12 border-amber-600/30">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Main Footer Content */}

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
        </div>

        {/* Social Media Section */}
        <div className="mb-8">
          <h2 className="text-center font-serif text-3xl font-bold text-amber-200 mb-6 tracking-wider">
            Follow Our Journey
          </h2>
          <div className="flex justify-center items-center gap-6">
            {/* Instagram */}
            <Link
              to="https://www.instagram.com/the_authenticboulevard?igsh=MTY3YmVqcXU4cmhlYw=="
              className="group relative p-4 bg-gradient-to-br from-amber-800 to-stone-800 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-amber-600/30 hover:border-amber-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <svg
                viewBox="0 0 24 24"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="text-amber-200 group-hover:text-amber-100 transition-colors duration-300 relative z-10"
              >
                <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"></path>
              </svg>
            </Link>

            {/* TikTok */}
            <Link
              to="https://www.tiktok.com/"
              className="group relative p-4 bg-gradient-to-br from-stone-800 to-slate-800 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-amber-600/30 hover:border-amber-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                height="32"
                width="32"
                fill="currentColor"
                className="text-amber-200 group-hover:text-amber-100 transition-colors duration-300 relative z-10"
              >
                <path d="M34.8 10.9c-2.4-2.2-3.5-5.1-4.1-7.9h-4.5v26.5c-.2 2.9-2.7 5.3-5.6 5.3-3.1 0-5.6-2.5-5.6-5.6 0-3 2.4-5.5 5.4-5.6.4 0 .8.1 1.1.2v-5.5c-.7-.1-1.3-.2-2-.2-6.1 0-11.1 5-11.1 11.1 0 6.1 5 11.1 11.1 11.1 6.1 0 11.1-5 11.1-11.1V14c1.2.8 2.4 1.5 3.8 2.1.9.4 1.9.7 2.9.9v-5.4c-1.2-.2-2.3-.6-3.4-1.2z" />
              </svg>
            </Link>

            {/* Facebook */}
            <Link
              to="https://www.facebook.com/TheAuthenticBoulevard/"
              className="group relative p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-amber-600/30 hover:border-amber-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                fill="currentColor"
                className="text-amber-200 group-hover:text-amber-100 transition-colors duration-300 relative z-10"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.708h-3.415v-3.59h3.415V8.413c0-3.387 2.068-5.229 5.088-5.229 1.443 0 2.684.107 3.044.155v3.53h-2.088c-1.636 0-1.952.777-1.952 1.92v2.514h3.901l-.51 3.59h-3.39V24h6.651C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-amber-600/30 pt-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
          </div>
          <p className="text-sm text-amber-300/70 font-serif tracking-wide select-none">
            &copy; {new Date().getFullYear()} The Authentic Boulevard. All rights reserved.
          </p>
          <p className="text-xs text-amber-400/60 mt-2 font-serif italic">
            Crafted with passion • Designed with purpose
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
