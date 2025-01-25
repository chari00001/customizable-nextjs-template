import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/api/")) {
        return !!token;
      }
      return true;
    },
  },
});

export const config = {
  matcher: ["/api/:path*", "/admin/:path*"],
}; 