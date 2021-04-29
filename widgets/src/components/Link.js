const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    // Prevent full page reload : Can't move to page.

    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;

// import React from "react";

// const Link = ({ className, href, children }) => {
//   const onClick = (e) => {
//     e.preventDefault();

//     window.history.pushState({}, "", href);

//     const navEvent = new PopStateEvent("popstate");
//     window.dispatchEvent(navEvent);
//   };

//   return (
//     <a onClick={onClick} className={className} href={href}>
//       {children}
//     </a>
//   );
// };

// export default Link;
