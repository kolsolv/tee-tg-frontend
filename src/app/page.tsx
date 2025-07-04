// src/app/page.tsx
"use client";

import React, { useState } from "react";
import {
  Page,
  Main,
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  LeftColumn,
  RightColumn,
  Description,
  Form,
  InputGroup,
  Label,
  Input,
  SubmitButton,
  Spinner,
  Message,
  Features,
  Feature,
  FeatureIcon,
  FeatureText,
  Guide,
  GuideTitle,
  GuideSteps,
  Step,
  StepIcon,
  StepContent,
  StepTitle,
  StepText,
} from "./styles";

export default function Home() {
  const [apiKey, setApiKey] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!apiKey.trim()) {
      setMessage("Please enter a valid API key");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      // Временный URL для отправки данных
      const response = await fetch("http://localhost:3005/api/start-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          telegramToken: apiKey,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setMessage(
          "API key submitted successfully! Your bot will be configured shortly."
        );
        setApiKey("");
      } else {
        setMessage("Failed to submit API key. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Page>
      <Main>
        <Container>
          <Header>
            <Title>Telegram Chat Analyzer</Title>
            <Subtitle>AI-Powered Message Analysis Bot</Subtitle>
          </Header>

          <Content>
            {/* Левая колонка - форма */}
            <LeftColumn>
              <Description>
                <p>
                  Connect your Telegram group with our advanced AI bot that
                  analyzes messages using cutting-edge language models. Get
                  insights, detect patterns, and enhance your community
                  management with intelligent automation.
                </p>
              </Description>

              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Label htmlFor="apiKey">Telegram Bot API Key</Label>
                  <Input
                    id="apiKey"
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your Telegram Bot API key..."
                    disabled={isLoading}
                  />
                </InputGroup>

                <SubmitButton
                  type="submit"
                  disabled={isLoading || !apiKey.trim()}
                >
                  {isLoading ? (
                    <>
                      <Spinner />
                      Processing...
                    </>
                  ) : (
                    "Connect Bot"
                  )}
                </SubmitButton>

                {message && (
                  <Message success={message.includes("successfully")}>
                    {message}
                  </Message>
                )}
              </Form>

              <Features>
                <Feature>
                  <FeatureIcon>🤖</FeatureIcon>
                  <FeatureText>AI-Powered Analysis</FeatureText>
                </Feature>
                <Feature>
                  <FeatureIcon>🔒</FeatureIcon>
                  <FeatureText>Secure & Private</FeatureText>
                </Feature>
                <Feature>
                  <FeatureIcon>⚡</FeatureIcon>
                  <FeatureText>Real-time Processing</FeatureText>
                </Feature>
              </Features>
            </LeftColumn>

            {/* Правая колонка - гайд */}
            <RightColumn>
              <Guide>
                <GuideTitle>How to Create a Telegram Bot</GuideTitle>
                <GuideSteps>
                  <Step>
                    <StepIcon>🔍</StepIcon>
                    <StepContent>
                      <StepTitle>Find and Start BotFather</StepTitle>
                      <StepText>
                        Open the Telegram app and search for "@BotFather". Start
                        a chat with it.
                      </StepText>
                    </StepContent>
                  </Step>

                  <Step>
                    <StepIcon>🆕</StepIcon>
                    <StepContent>
                      <StepTitle>Create a New Bot</StepTitle>
                      <StepText>
                        Type <code>/newbot</code> in the chat with BotFather.
                      </StepText>
                    </StepContent>
                  </Step>

                  <Step>
                    <StepIcon>📝</StepIcon>
                    <StepContent>
                      <StepTitle>Name Your Bot</StepTitle>
                      <StepText>
                        BotFather will ask for a name for your bot. This is the
                        name that will be displayed in chats.
                      </StepText>
                    </StepContent>
                  </Step>

                  <Step>
                    <StepIcon>👤</StepIcon>
                    <StepContent>
                      <StepTitle>Choose a Username</StepTitle>
                      <StepText>
                        The username must end in "bot" (e.g., yourbot_bot). This
                        is how users will find and interact with your bot.
                      </StepText>
                    </StepContent>
                  </Step>

                  <Step>
                    <StepIcon>🔑</StepIcon>
                    <StepContent>
                      <StepTitle>Get the API Token</StepTitle>
                      <StepText>
                        BotFather will provide an API token. Copy this token and
                        paste it in the form on the left.
                      </StepText>
                    </StepContent>
                  </Step>
                </GuideSteps>
              </Guide>
            </RightColumn>
          </Content>
        </Container>
      </Main>
    </Page>
  );
}
