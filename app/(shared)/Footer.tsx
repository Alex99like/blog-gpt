type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className={'bg-wh-900 text-wh-50 py-10 px-10'}>
      <div className={'justify-between mx-auto gap-16 sm:flex'}>
        <div className={'mt-16 basis-1/2 sm:mt-0'}>
          <h4 className={'font-bold'}>BLOG OF THE FUTURE</h4>
          <p className={'my-5'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Rerum doloribus corporis deleniti velit quibusdam tempora 
            iusto quas nemo saepe, officiis distinctio quaerat vel provident 
            debitis magnam optio? Minima, optio dolor.
          </p>
          <p>Blog of the Future All Rights Reserved</p>
        </div>

        <div className={'mt-16 basis-1/4 sm:mt-0'}>
          <h4 className={'font-bold'}>Links</h4>
          <p className={'my-5'}>Massa orci senectus</p>
          <p className={'my-5'}>Some random link again</p>
          <p>Ullamcorper vivamus</p>
        </div>

        <div className={'mt-16 basis-1/4 sm:mt-0'}>
          <h4 className={'font-bold'}>Contact Us</h4>
          <p className={'my-5'}>Tempus metus mattis risus volutpat egestas.</p>
          <p>+(xxx) xx-xxx-xx-xx</p>
        </div>
      </div>
    </footer>
  )
}
