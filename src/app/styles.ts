import styled, { keyframes } from "styled-components";

// Анимации
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Основные компоненты
export const Page = styled.div`
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --dark-bg: #0a0a0a;
  --card-bg: rgba(255, 255, 255, 0.05);
  --border-color: rgba(255, 255, 255, 0.1);
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --shadow-primary: 0 20px 40px rgba(0, 0, 0, 0.3);
  --shadow-hover: 0 30px 60px rgba(0, 0, 0, 0.4);

  min-height: 100vh;
  background: var(--dark-bg);
  background-image: radial-gradient(
      circle at 20% 50%,
      rgba(102, 126, 234, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(118, 75, 162, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(79, 172, 254, 0.1) 0%,
      transparent 50%
    );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin: 0;
  overflow-x: hidden;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.div`
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
  max-width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const LeftColumn = styled.div`
  text-align: left;
  min-width: 0;
`;

export const RightColumn = styled.div`
  text-align: left;
  min-width: 0;
`;

export const Description = styled.div`
  margin-bottom: 1.5rem;

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }
`;

export const Form = styled.form`
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-primary);
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-primary);
  transition: all 0.3s ease;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: var(--primary-gradient);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-sizing: border-box;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const Message = styled.div<{ success?: boolean }>`
  margin-top: 1rem;
  padding: 0.875rem;
  border-radius: 8px;
  font-weight: 500;
  animation: ${slideIn} 0.3s ease-out;
  font-size: 0.9rem;
  background: ${(props) =>
    props.success ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)"};
  border: 1px solid
    ${(props) =>
      props.success ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"};
  color: ${(props) => (props.success ? "#22c55e" : "#ef4444")};
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const Feature = styled.div`
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-primary);
    border-color: rgba(102, 126, 234, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

export const FeatureIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

export const FeatureText = styled.div`
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

// Компоненты для гайда
export const Guide = styled.div`
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: var(--shadow-primary);
  height: fit-content;
  max-height: 80vh;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    max-height: none;
    overflow-y: visible;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

export const GuideTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const GuideSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(102, 126, 234, 0.2);
    transform: translateX(2px);
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

export const StepIcon = styled.div`
  font-size: 1.25rem;
  min-width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-gradient);
  border-radius: 6px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    min-width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
  }
`;

export const StepContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const StepTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const StepText = styled.p`
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.4;
  margin: 0;

  code {
    background: rgba(102, 126, 234, 0.2);
    color: #667eea;
    padding: 0.15rem 0.3rem;
    border-radius: 3px;
    font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

// Медиа-запросы для адаптивности
export const ResponsiveWrapper = styled.div`
  @media (max-width: 768px) {
    ${Page} {
      padding: 0.5rem;
    }

    ${Title} {
      font-size: 2.25rem;
    }

    ${Subtitle} {
      font-size: 1rem;
    }

    ${Description} p {
      font-size: 0.9rem;
    }

    ${Form} {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    ${Page} {
      padding: 0.25rem;
    }

    ${Title} {
      font-size: 1.75rem;
    }

    ${Form} {
      padding: 1.25rem;
    }
  }
`;
