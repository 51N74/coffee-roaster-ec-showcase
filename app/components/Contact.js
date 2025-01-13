import Link from "next/link";
export default function Contact() {
  return (
    <>
      <section className="container mx-auto px-4 py-4 ">
        <h2 className="text-center text-4xl font-bold mb-4">
          การดริปกาแฟและกาแฟคั่วที่ดีต้องเริ่มต้นจากมีเมล็ดกาแฟคุณภาพ
        </h2>
        <p className="text-center text-2xl">
          สาเหตุหลักที่เราตั้งใจสร้างจุดเริ่มต้นจากการเป็น “โรงคั่วกาแฟ”
          เพราะต้องการพัฒนาเมล็ดกาแฟให้ตอบโจทย์กับคอกาแฟทั่วโลก
          โดยเฉพาะคนไทยซึ่งถือเป็นหนึ่งในประเทศที่นิยมดื่มกาแฟคั่วเป็นอย่างมาก
          กาแฟสดคั่วบดของเราจึงมีตัวเลือกให้แบบครบครัน
          ชื่นชอบสไตล์ไหนก็สามารถเลือกซื้อกันได้ทันที
          เมื่อมีเมล็ดกาแฟคั่วชั้นเลิศแล้ว
          ก็เป็นงานง่ายของบาริสต้าที่จะนำเสนอความอร่อยให้ลูกค้าหลงใหล
          ไม่ต้องปวดหัวกับการพยายามหาวิธีคั่วกาแฟเองให้ยุ่งยาก.
          เหมาะกับธุรกิจกาแฟทุกรูปแบบ ทั้งคาเฟ่ขนาดใหญ่ที่มีสาขาทั่วไทย,
          คาเฟ่ขนาดเล็ก, ธุรกิจแฟรนไชส์กาแฟ
          หรือคอกาแฟที่อยากซื้อไปลองดื่มด้วยตนเองก็ยิ่งสะดวกมากขึ้น
          ไม่ต้องกังวลใจเกี่ยวกับการดริปกาแฟ ต้องการกาแฟดริปสำเร็จรูป
          หรือกาแฟดริปแบบไหนเราจัดให้ทั้งหมด กาแฟคั่วอ่อน, กาแฟคั่วเข้ม ฯลฯ
          เมล็ดกาแฟคั่วรสชาติดีเหมือนกับนั่งทานในร้านสุดหรูหรา
          พร้อมทั้งยังมีบริการให้คำแนะนำปรึกษาแก่ผู้ที่สนใจทำธุรกิจกาแฟแต่ยังขาดความรู้ความเชี่ยวชาญในเรื่องของเมล็ดกาแฟ.
        </p>
      </section>

      <div className="container mx-auto px-4 py-4 ">
        <div className="columns-2">
          <Link href="/about">
            <div className="card bg-base-100 image-full shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </Link>

          <Link href="/contact">
            <div className="card bg-base-100 image-full shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
