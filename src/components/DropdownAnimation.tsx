import React, { useState } from 'react';

interface ListItemProps {
  title: string;
  content: any;
  iconToShow?: any;
}

const DropdownAnimation: React.FC = () => {
  const [isMainContainerOpen, setIsMainContainerOpen] = useState(false);

  const cardData = [
    {
      title: "Cool guy",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna orci, blandit eu ante nec, sodales vehicula nisi. Mauris vel nibh imperdiet, tempus lectus ac, faucibus quam. Praesent euismod congue cursus. Phasellus tincidunt sem vitae neque egestas, ut egestas justo venenatis.",
      icons: ['diamond', 'rectangle']
    },
    {
      title: "Someone",
      content: "Lorem ipsum",
      icons: []
    },
    {
      title: "Someone else",
      content: "Lorem ipsum",
      icons: ['rectangle']
    },
    {
      title: "Who else",
      content: (
        <>
        <a href="#" className="text-blue-500 underline">@Someone else</a> Lorem Indeed! 
        </>
      ),
      icons: ['diamond']
    },
    {
      title: "No one",
      content: "Cool!",
      icons: ['diamond', 'rectangle']
    }
  ];

  const toggleMainContainer = () => {
    setIsMainContainerOpen(!isMainContainerOpen);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-200 rounded-xl shadow-lg border-2 border-red-500 overflow-hidden">
        {!isMainContainerOpen ? (
          <div className="p-4">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-md flex-shrink-0 mr-3"></div>
              <div>
                <h2 className="text-large font-bold text-gray-800 mb-1">
                  {cardData[0].title}
                </h2>
                <p className="text-gray-600 text-justify">
                  {cardData[0].content}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 mt-4 ml-10 justify-start">
              <button className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-md text-gray-600 hover:bg-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF000080" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 12L12 22L22 12L12 2Z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-md text-gray-600 hover:bg-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF000080" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
                </svg>
              </button>
              <button
                onClick={toggleMainContainer}
                className="text-red-500 hover:text-red-600 focus:outline-none text-sm font-bold ml-20 underline"
              >
                Open
              </button>
            </div>
          </div>
        ) : (
          <div className="px-4 pb-4 pt-2 bg-gray-200 divide-y divide-red-200">
            {cardData.map((data, index) => (
              <ListItem key={index} title={data.title} content={data.content} iconToShow={data.icons} />
            ))}
            <div className="pt-4 flex justify-center">
              <button
                onClick={toggleMainContainer}
                className="text-red-500 hover:text-red-600 focus:outline-none text-sm font-bold underline"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ListItem: React.FC<ListItemProps> = ({ title, content, iconToShow }) => {
  return (
    <div className="w-full py-3">
      <div className="flex items-start">
        <div className="w-8 h-8 bg-red-500 rounded-md flex-shrink-0 mr-3"></div>
        <div>
          <h3 className="text-large font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600 text-justify">{content}</p>
        </div>
      </div>
      {iconToShow && iconToShow.length > 0 && (
            <div className="flex space-x-2 ml-10 mt-2">
              {iconToShow.map((iconType, index) => (
                <button key={index} className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-md hover:bg-gray-400">
                  {iconType === 'diamond' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF000080" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 12L12 22L22 12L12 2Z"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF000080" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="3" ry="3"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
    </div>
  );
};


export default DropdownAnimation;
