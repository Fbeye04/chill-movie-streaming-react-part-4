const Label = ({ variant, children }) => {
  const styles = {
    primary:
      "absolute left-2.5 top-2.5 border border-brand-primary rounded-3xl bg-brand-primary py-1 px-2.5 z-10 text-xxs md:text-sm",
    danger:
      "flex flex-col text-center p-1 gap-2.5 absolute w-6 md:w-8 h-10 md:h-12 right-2.5 top-0 bg-brand-danger rounded-tr rounded-bl z-10 text-xxs md:text-sm",
  };

  return (
    <>
      <span className={styles[variant]}>{children}</span>
    </>
  );
};

export default Label;
