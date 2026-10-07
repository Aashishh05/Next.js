export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <h2>Inner Layout Item</h2>
      {children}
    </>
  );
}
