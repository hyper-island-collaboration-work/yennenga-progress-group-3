import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RecentNews from "./RecentNews";
import * as contentful from "contentful";

// Mock the contentful API
vi.mock("contentful", () => ({
  createClient: vi.fn().mockReturnValue({
    getEntries: vi.fn().mockResolvedValue({
      items: [
        {
          sys: { id: "1" },
          fields: {
            createdDate: "2023-04-29",
            newsTitle: "Test News Title",
            imageFocalPoint: {
              fields: {
                focalPoint: {
                  focalPoint: { x: 50, y: 50 },
                },
                image: {
                  fields: {
                    file: {
                      url: "/test-image.jpg",
                      details: {
                        image: {
                          width: 100,
                          height: 100,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      ],
    }),
  }),
}));

describe("RecentNews component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RecentNews />
      </BrowserRouter>
    );
  });

  it("should make an API call and render the response correctly", async () => {
    await waitFor(() => {
      expect(contentful.createClient().getEntries).toHaveBeenCalled();
    });
    expect(await screen.findByText("Test News Title")).toBeInTheDocument(); // Use findByText for asynchronous elements
  });

  // Since formatDate is an internal function, test the output instead
  it("should display formatted dates correctly", async () => {
    await waitFor(() => {
      expect(screen.getByText("29 Apr")).toBeInTheDocument();
    });
  });
});

/*
  it("should handle empty news items", async () => {
    vi.mock("contentful", () => ({
      createClient: vi.fn().mockReturnValue({
        getEntries: vi.fn().mockResolvedValue({ items: [] }),
      }),
    }));
  
    render(
      <BrowserRouter>
        <RecentNews />
      </BrowserRouter>
    );
  
    const noRecentNewsElements = await screen.findAllByText("No recent news");
    expect(noRecentNewsElements.length).toBeGreaterThan(0);
  });
*/