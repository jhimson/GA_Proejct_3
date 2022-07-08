import { Spring, animated } from 'react-spring';
import PersonalInfoView from '../../Review/PersonalInfoView/PersonalInfoView';

export default function PersonalInfoSection({
  section,
  personal,
  setPersonal,
}) {
  const handleChange = (e) => {
    setPersonal((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="flex gap-x-60">
            <div className="h-auto w-96 min-h-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
              <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
                <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
                  {section === 'PersonalInfo'
                    ? 'Personal Info'.toUpperCase()
                    : section}
                </li>
              </ul>
              <div className="form mt-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name"
                    value={personal.name}
                    onChange={handleChange}
                    id="name"
                    type="text"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    value={personal.email}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="phone"
                    value={personal.phone}
                    onChange={handleChange}
                    id="phone"
                    type="text"
                    placeholder="Phone"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="link1"
                  >
                    LinkedIn
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="link1"
                    value={personal.link1}
                    onChange={handleChange}
                    id="link1"
                    type="text"
                    placeholder="LinkedIn Profile"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="github"
                  >
                    Github
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="link2"
                    value={personal.link2}
                    onChange={handleChange}
                    id="link2"
                    type="text"
                    placeholder="Github Profile"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="portfolio"
                  >
                    Portfolio
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="link3"
                    value={personal.link3}
                    onChange={handleChange}
                    id="link3"
                    type="text"
                    placeholder="Developer Profile"
                  />
                </div>
              </div>
              {/* <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button> */}
            </div>
            <PersonalInfoView
              section={section}
              name={personal.name}
              email={personal.email}
              phone={personal.phone}
              link1={personal.link1}
              link2={personal.link2}
              link3={personal.link3}
            />
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
