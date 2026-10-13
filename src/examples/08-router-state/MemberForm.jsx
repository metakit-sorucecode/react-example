import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function MemberForm({ onJoin }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      type: "학생",
      genres: [],
      sms: false,
    },
  });

  // 검증을 통과하면 data에 { name, phone, type, genres, sms }가 담겨 온다
  function onValid(data) {
    onJoin(data);
    navigate("/members");
  }

  return (
    <div>
      <h1>회원등록</h1>
      <p>도서관 회원 정보를 적어 주세요.</p>
      <hr />
      <form onSubmit={handleSubmit(onValid)} noValidate>
        <div className="row">
          <strong>이름</strong>
          <input
            {...register("name", { required: "이름을 입력하세요." })}
            placeholder="홍길동"
          />
        </div>
        {errors.name && <p role="alert">{errors.name.message}</p>}
        <div className="row">
          <strong>전화번호</strong>
          <input
            type="tel"
            {...register("phone", {
              required: "전화번호를 입력하세요.",
              pattern: {
                value: /^010-\d{4}-\d{4}$/,
                message: "010-1234-5678처럼 입력하세요.",
              },
            })}
            placeholder="010-1234-5678"
          />
        </div>
        {errors.phone && <p role="alert">{errors.phone.message}</p>}
        <div className="row">
          <strong>회원 종류</strong>
          <label>
            <input type="radio" value="학생" {...register("type")} /> 학생
          </label>
          <label>
            <input type="radio" value="일반" {...register("type")} /> 일반
          </label>
        </div>
        <div className="row">
          <strong>관심 분야</strong>
          <label>
            <input type="checkbox" value="소설" {...register("genres")} /> 소설
          </label>
          <label>
            <input type="checkbox" value="IT" {...register("genres")} /> IT
          </label>
          <label>
            <input type="checkbox" value="역사" {...register("genres")} /> 역사
          </label>
        </div>
        <div className="row">
          <strong>문자 알림</strong>
          <label>
            <input type="checkbox" {...register("sms")} /> 받기
          </label>
        </div>
        <div className="row">
          <button>등록</button>
          <button type="button" onClick={() => navigate("/")}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default MemberForm;
