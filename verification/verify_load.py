from playwright.sync_api import sync_playwright

def verify_app_load():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            # Visit the app
            page.goto("http://localhost:5173", timeout=10000)

            # Wait for content to load - if it crashes it wont load
            # It should show Login Page or Loading
            # We look for "Đăng nhập" or "Welcome" or similar text from LoginPage
            # LoginPage.tsx usually has text like "Chào mừng trở lại" or "Email"

            page.wait_for_selector("text=Đăng nhập", timeout=5000)

            # Take screenshot
            page.screenshot(path="verification/app_load.png")
            print("App loaded successfully and Login page is visible")
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_app_load()
