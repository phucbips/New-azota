import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, Ticket } from "lucide-react";

interface VoucherInfo {
  code: string;
  name: string;
  type: "percent" | "fixed";
  value: number;
  min_order_amount: number;
  expires_at: string | null;
}

interface GiftBoxAnimationProps {
  voucher: VoucherInfo | null;
  onClose: () => void;
  open: boolean;
}

const GiftBoxAnimation = ({ voucher, onClose, open }: GiftBoxAnimationProps) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => setOpened(true);

  const handleClose = () => {
    setOpened(false);
    onClose();
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
        onClick={opened ? handleClose : undefined}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="w-full max-w-sm rounded-3xl border border-border bg-card p-8 text-center shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {!opened ? (
            <div className="space-y-6">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-secondary/20"
              >
                <Gift className="h-16 w-16 text-secondary" />
              </motion.div>
              <div>
                <h3 className="font-display text-xl font-extrabold text-foreground">
                  🎁 Bạn nhận được quà!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cảm ơn bạn đã bình chọn. Nhấn mở để nhận voucher!
                </p>
              </div>
              <button
                onClick={handleOpen}
                className="w-full rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Mở hòm quà ✨
              </button>
            </div>
          ) : voucher ? (
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="space-y-5"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-foreground">
                🎉 Chúc mừng!
              </h3>
              <div className="rounded-2xl border-2 border-dashed border-primary bg-primary/5 p-5">
                <Ticket className="mx-auto mb-2 h-8 w-8 text-primary" />
                <p className="text-lg font-extrabold text-primary">
                  {voucher.type === "percent"
                    ? `Giảm ${voucher.value}%`
                    : `Giảm ${new Intl.NumberFormat("vi-VN").format(voucher.value)}đ`}
                </p>
                <p className="text-sm text-muted-foreground">{voucher.name}</p>
                {voucher.min_order_amount > 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Đơn tối thiểu {new Intl.NumberFormat("vi-VN").format(voucher.min_order_amount)}đ
                  </p>
                )}
                <div className="mt-3 rounded-xl bg-card p-3">
                  <p className="text-xs text-muted-foreground">Mã voucher</p>
                  <p className="font-mono text-lg font-extrabold text-foreground tracking-wider select-all">
                    {voucher.code}
                  </p>
                </div>
                {voucher.expires_at && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    HSD: {new Date(voucher.expires_at).toLocaleDateString("vi-VN")}
                  </p>
                )}
              </div>
              <button
                onClick={handleClose}
                className="w-full rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Tuyệt vời! 🎊
              </button>
            </motion.div>
          ) : (
          <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-5"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Gift className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-foreground">
                Hết voucher rồi!
              </h3>
              <p className="text-muted-foreground">
                Rất tiếc, voucher tháng này đã hết! Hãy thử lại vào tháng sau nhé 🍀
              </p>
              <button onClick={handleClose} className="w-full rounded-full bg-muted px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted/80">
                Đóng
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GiftBoxAnimation;
