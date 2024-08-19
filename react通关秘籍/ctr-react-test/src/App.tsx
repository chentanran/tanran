import {
  Watermark,
  ConfigProvider,
  useMessage,
  Calendar,
} from "ctr-react-component";
import dayjs from "dayjs";
import "ctr-react-component/dist/esm/Calendar/index.css";
import "ctr-react-component/dist/esm/Message/index.css";

function Aaa() {
  const message = useMessage();

  return <button onClick={() =>{
    message.add({
      content:'请求成功'
    })
  }}>成功</button>
}

const App = () => {
 
  return (
      <ConfigProvider>
        {/* <Watermark content={["测试水印", "神说要有光"]}>
          <div style={{ height: 800 }}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              quod deserunt quidem quas in rem ipsam ut nesciunt asperiores
              dignissimos recusandae minus, eaque, harum exercitationem esse
              sapiente? Eveniet, id provident!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              quod deserunt quidem quas in rem ipsam ut nesciunt asperiores
              dignissimos recusandae minus, eaque, harum exercitationem esse
              sapiente? Eveniet, id provident!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              quod deserunt quidem quas in rem ipsam ut nesciunt asperiores
              dignissimos recusandae minus, eaque, harum exercitationem esse
              sapiente? Eveniet, id provident!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              quod deserunt quidem quas in rem ipsam ut nesciunt asperiores
              dignissimos recusandae minus, eaque, harum exercitationem esse
              sapiente? Eveniet, id provident!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              quod deserunt quidem quas in rem ipsam ut nesciunt asperiores
              dignissimos recusandae minus, eaque, harum exercitationem esse
              sapiente? Eveniet, id provident!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              quod deserunt quidem quas in rem ipsam ut nesciunt asperiores
              dignissimos recusandae minus, eaque, harum exercitationem esse
              sapiente? Eveniet, id provident!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              quod deserunt quidem quas in rem ipsam ut nesciunt asperiores
              dignissimos recusandae minus, eaque, harum exercitationem esse
              sapiente? Eveniet, id provident!
            </p>
          </div>
        </Watermark>

        <Calendar value={dayjs("2024-07-01")}></Calendar> */}

        <div>
          <Aaa></Aaa>
        </div>
      </ConfigProvider>
  );
};

export default App;
