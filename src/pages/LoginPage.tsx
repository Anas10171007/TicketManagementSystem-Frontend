import AuthLayout from "../layouts/AuthLayout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import Logo from "../components/common/Logo";

function LoginPage() {
  return (
    <AuthLayout>
      <Logo />

      <Card>
        <h2 className="text-2xl font-bold mb-6">
          Welcome Back
        </h2>

        <div className="space-y-5">

          <div>
            <Label>Email</Label>

            <Input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label>Password</Label>

            <Input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <Button>
            Login
          </Button>

        </div>
      </Card>
    </AuthLayout>
  );
}

export default LoginPage;